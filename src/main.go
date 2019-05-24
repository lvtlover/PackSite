package main

import (
	"archive/zip"
	"flag"
	"fmt"
	"io"
	"log"
	"os"
	"os/exec"
	"runtime"

	"./filemgr"
)

func main() {

	var bEncode = flag.Bool("e", false, "Encode File")
	flag.Parse()
	var sInput = flag.Arg(0)
	//test code
	sInput = "vp.psite"

	if sInput == "" {
		//show help
		showHelp()
		return
	}
	if *bEncode == false {
		//		filemgr.SetViewFile(sInput)
		//		defer filemgr.Close()
		openbrowser("http://127.0.0.1:" + ListenPort)
		//		Listen()
		filemgr.ServFile(sInput, ListenPort)
	} else {
		outname := flag.Arg(1)
		if outname == "" {
			showHelp()
			return
		}
		filemgr.ZipAll(sInput, outname)
	}

}

func showHelp() {
	println("")
	println("PackSite, pack or view website in a single package file")
	println("")
	println("USEAGE: psite [-e path] filename")
	println("")
	println("   -e: Encode all file in path into a package named filename")
	println("   without -e: View package filename")
}
func openbrowser(url string) {
	var err error

	switch runtime.GOOS {
	case "linux":
		err = exec.Command("xdg-open", url).Start()
	case "windows":
		err = exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	case "darwin":
		err = exec.Command("open", url).Start()
	default:
		err = fmt.Errorf("unsupported platform")
	}
	if err != nil {
		log.Fatal(err)
	}

}

func testunzip() {
	// Open a zip archive for reading.
	r, err := zip.OpenReader("testdata/test.zip")
	if err != nil {
		log.Fatal(err)
	}
	defer r.Close()

	// Iterate through the files in the archive,
	// printing some of their contents.
	for _, f := range r.File {
		fmt.Printf("Contents of %s:\n", f.Name)
		if f.FileInfo().IsDir() {
			continue
		}
		rc, err := f.Open()
		if err != nil {
			log.Fatal(err)
		}
		_, err = io.CopyN(os.Stdout, rc, 68)
		if err != nil {
			log.Fatal(err)
		}
		rc.Close()
		fmt.Println()
	}
}
