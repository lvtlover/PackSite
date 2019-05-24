package filemgr

import (
	"log"
	"net/http"

	"github.com/pseidemann/finish"
	"github.com/spkg/zipfs"
)

//ServFile ...
func ServFile(file string, port string) error {
	fs, err := zipfs.New(file)
	if err != nil {
		return err
	}

	//	return http.ListenAndServe(":"+port, zipfs.FileServer(fs))
	srv := &http.Server{Addr: "localhost:" + port, Handler: zipfs.FileServer(fs)}

	fin := finish.New()
	fin.Add(srv)
	log.Print("Start p2p webserver on:" + port)
	go func() {
		err := srv.ListenAndServe()
		if err != http.ErrServerClosed {
			log.Fatal(err)
		}
	}()

	fin.Wait()
	return err
}
