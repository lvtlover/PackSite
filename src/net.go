package main

import (
	"log"
	"net"
	"net/http"
	"strconv"

	"./filemgr"
	"github.com/pseidemann/finish"
)

//ListenPort ...
var ListenPort = findport()

func findport() string {
	listener, err := net.Listen("tcp", ":0")
	if err != nil {
		panic(err)
	}
	defer listener.Close()
	return strconv.Itoa(listener.Addr().(*net.TCPAddr).Port)
}

//Listen ...
func Listen() {
	//	go func() {
	mHandle := fooHandler{}
	srv := &http.Server{Addr: "localhost:" + ListenPort, Handler: &mHandle}

	fin := finish.New()
	fin.Add(srv)
	log.Print("Start p2p webserver on:" + ListenPort)
	go func() {
		err := srv.ListenAndServe()
		if err != http.ErrServerClosed {
			log.Fatal(err)
		}
	}()

	fin.Wait()
	//	}()
}

type fooHandler struct {
}

func (m *fooHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	url := r.RequestURI
	println("get request" + r.RequestURI)

	switch url {
	case "/api":

	default:
		filemgr.ServeHTTP(w, r)

	}
}
