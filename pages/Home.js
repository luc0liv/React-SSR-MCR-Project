import React from "react";
import Head from "next/head"


export default function Home() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
          <title>MCR</title>
        </Head>
  
      <body className="bg-secondary">

        <div class="jumbotron jumbotron-fluid shadow bg-dark text-center">
          <div class="Container text-white">
              <h1 class="display-4">Welcome!</h1>
              <hr></hr>
              <p class="lead">Learn more about MCR</p>
          </div>
        </div>

        <section className="Container bg-dark rounded shadow mx-auto m-2 p-2 shadow text-center">
           <div className="text-danger text-center display-2 p-2">This is My Chemical Romance</div>
            <div className=""><a href="https://www.mychemicalromance.com"><img width="50%" src="./images/mcrreturn.jpg"></img></a></div>
        </section>
        <section className="container-fluid bg-dark rounded shadow text-center p-3 d-flex-inline flex-wrap justify-content-center"> 
            <div className=" row row-cols-8 p-1 m-4 justify-content-center">
              
                <div className="col mt-5 mr-2 card p-4">
                  <img src="https://64.media.tumblr.com/1090d02f842929a80753f2dfff5d50a4/tumblr_nj29ietXRM1sjxu3io1_500.gifv"  />
                  </div>       
         
          <div className="col mt-5 mr-2 card p-4"><iframe  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3RTiX1A5GgU" width="auto" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>
          
          </div>
        </section>
      </body>

      </div>
    )
  }
  