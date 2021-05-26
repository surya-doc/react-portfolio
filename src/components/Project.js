import React, { useState } from 'react';
import blogImg from '../components/blog-website.png';
import covidImg from '../components/covid-website.png';
import musicImg from '../components/music-website.png';

function Project(){
    const all = [
        {
            "name": "Blog website",
            "link": "https://quiet-sands-66397.herokuapp.com/",
            "img": blogImg
        },
        {
            "name": "Covid-19 tracker",
            "link": "https://floating-spire-68968.herokuapp.com/",
            "img": covidImg
        },
        {
            "name": "The melody box",
            "link": "https://the-melody-box.web.app/",
            "img": musicImg
        }
    ];
    const [showProject, setProject] = useState(all);
    const frontEnd = [
        {
            "name": "The melody box",
            "link": "https://the-melody-box.web.app/",
            "img": musicImg
        }
    ]
    const backend = [
        {
            "name": "Blog website",
            "link": "https://quiet-sands-66397.herokuapp.com/",
            "img": blogImg
        },
        {
            "name": "Covid-19 tracker",
            "link": "https://floating-spire-68968.herokuapp.com/",
            "img": covidImg
        }
    ]
    const database = [
        {
            "name": "Blog website",
            "link": "https://quiet-sands-66397.herokuapp.com/",
            "img": blogImg
        }
    ]

    function frontSet(){
        setProject(frontEnd);
    }
    function backSet(){
        setProject(backend);
    }
    function dataSet(){
        setProject(database);
    }
    function setAll(){
        setProject(all);
    }
    return(
        <div id="project">
        <h2 style={{textAlign: "center", color: "#FFF"}}>Projects</h2>
            <div className="projectMainContainer">
                <div className="button">
                    <button onClick={setAll} style={{padding: "5px 28px"}}>All</button>
                    <button onClick={frontSet}>Front End</button>
                    <button onClick={backSet}>Back End</button>
                    <button onClick={dataSet}>Data Base</button>
                    {/* <img src={blogImg} /> */}
                </div>
                <div className="project">
                    {
                        showProject.map((e) => {
                            return(
                                <div key={e.name} className="project-card">
                                    <img src={e.img} alt="project"/>
                                    <h4>{e.name}</h4>
                                    <a href={e.link}>Visit</a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;