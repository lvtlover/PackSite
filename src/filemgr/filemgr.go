package filemgr

import (
	"archive/zip"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

var packageFile string
var reader *zip.ReadCloser

//SetViewFile ...
func SetViewFile(file string) {
	packageFile = file
	var err error
	reader, err = zip.OpenReader(file)
	if err != nil {
		log.Fatal(err)
	}
}

//ServeHTTP ...
func ServeHTTP(w http.ResponseWriter, r *http.Request) bool {
	path := r.RequestURI
	if path == "/" {
		path = "/index.html"
	}
	path = strings.TrimPrefix(path, "/")
	for _, f := range reader.File {
		fmt.Printf("Contents of %s:\n", f.Name)
		if f.FileInfo().IsDir() {
			continue
		}
		if path == f.Name {
			rc, err := f.Open()
			if err != nil {
				return false
			}
			_, err = io.Copy(w, rc)
			if err != nil {
				log.Fatal(err)
			}
			rc.Close()
			return true
		}
	}
	return false
}

//Close ...
func Close() {
	reader.Close()
}

var oFile string

//ZipAll ...
func ZipAll(baseFolder string, outputFile string) {
	// baseFolder := "/Users/tom/Desktop/testing/"

	// Get a Buffer to Write To
	outFile, err := os.Create(outputFile)
	if err != nil {
		fmt.Println(err)
	}
	defer outFile.Close()
	oFile = outputFile
	// Create a new zip archive.
	w := zip.NewWriter(outFile)

	// Add some files to the archive.
	addFiles(w, baseFolder, "")

	if err != nil {
		fmt.Println(err)
	}

	// Make sure to check the error on Close.
	err = w.Close()
	if err != nil {
		fmt.Println(err)
	}
}

func addFiles(w *zip.Writer, basePath, baseInZip string) {
	// Open the Directory
	files, err := ioutil.ReadDir(basePath)
	if err != nil {
		fmt.Println(err)
	}

	for _, file := range files {
		fullPath := filepath.Join(basePath, file.Name())
		fmt.Println(fullPath)
		if !file.IsDir() {

			dat, err := ioutil.ReadFile(fullPath)
			if err != nil {
				fmt.Println(err)
				continue
			}

			// Add some files to the archive.
			f, err := w.Create(filepath.Join(baseInZip, file.Name()))
			if err != nil {
				fmt.Println(err)
			}
			_, err = f.Write(dat)
			if err != nil {
				fmt.Println(err)
			}
		} else if file.IsDir() {

			// Recurse
			//newBase := basePath + file.Name() + "/"
			newBase := fullPath
			fmt.Println("Recursing and Adding SubDir: " + file.Name())
			fmt.Println("Recursing and Adding SubDir: " + newBase)

			//addFiles(w, newBase, file.Name()+"/")
			addFiles(w, newBase, file.Name())
		}
	}
}
