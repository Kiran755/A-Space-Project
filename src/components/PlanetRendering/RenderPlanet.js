import React from 'react'
import "./RenderPlanet.css";
import Data from "../Data/PlanetData";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ShortInfoLayout from '../Utilites/ShortInfoLayout';
import * as THREE from "three";
import { useEffect, useRef } from 'react';
const RenderPlanet = () => {
    const location = useLocation()
    const { from } = location.state
    const mountRef = useRef(null)
    useEffect(() => {

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer(
            {
                antialias: true
            }
        );

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio)
        mountRef.current.appendChild(renderer.domElement);

        // var geometry = new THREE.BoxGeometry(1, 1, 1);
        // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // var cube = new THREE.Mesh(geometry, material);

        var sphereGeometry = new THREE.SphereGeometry(10, 100, 100)
        var material = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(from) })
        var sphere = new THREE.Mesh(sphereGeometry, material)
        var light = new THREE.DirectionalLight(0xffffff, 2)

        scene.add(light)
        scene.add(sphere);
        camera.position.z = 25;
        light.position.set(20, 0, 5);

        const array = sphere.geometry.attributes.position.array
        // for (let i = 0; i < array.length; i += 3) {
        //     console.log(array[i])
        // }
        sphere.rotation.x += 0.2;
        var animate = function () {
            requestAnimationFrame(animate);
            // sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener("resize", onWindowResize, false);
        animate();
        return () => {
            if (mountRef.current != undefined)
                mountRef.current.removeChild(renderer.domElement);
        }
    }, []);
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const planetDetail = Data.filter((planet) => {
        return planet.id === id;
    })
    const HandleBack = () => {
        navigate("/planets");
    }
    return (
        <div className="PlanetContainer">
            <div className='PlanetSVG fullsize' ref={mountRef}>
                {/* <img src={process.env.PUBLIC_URL + planetDetail[0].image} alt="planetDetails"></img> */}
            </div>
            <div className='backArrow' onClick={HandleBack}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="PlanetData">
                <h1>Planet Name : <span>{planetDetail[0].PlanetName}</span></h1>
                <div className='ShortDetails'>
                    <ShortInfoLayout info={planetDetail[0].Mass} svg={<i class="fa-solid fa-weight-scale"></i>} title={"Mass"} />
                    <ShortInfoLayout info={planetDetail[0].Radius} svg={<i class="fa-solid fa-circle"></i>} title={"Radius"} />
                    <ShortInfoLayout info={planetDetail[0].Position} svg={<i class="fa-solid fa-location-dot"></i>} title={"Position"} />
                    <ShortInfoLayout info={planetDetail[0].NaturalSatellite} svg={<i class="fa-solid fa-satellite"></i>} title={"Natural Satellite"} />
                    <ShortInfoLayout info={planetDetail[0].NaturalSatelliteName} svg={<i class="fa-solid fa-satellite"></i>} title={"Name"} />
                    <ShortInfoLayout info={planetDetail[0].Atmosphere} svg={<i class="fa-solid fa-cloud-sun-rain"></i>} title={"Atmosphere"} />
                    <ShortInfoLayout info={planetDetail[0].YearLength} svg={<i class="fa-solid fa-calendar-days"></i>} title={"YearLength"} />
                    <ShortInfoLayout info={planetDetail[0].DayLength} svg={<i class="fa-solid fa-calendar-days"></i>} title={"DayLength"} />
                    <ShortInfoLayout info={planetDetail[0].Habitable} svg={<i class="fa-solid fa-person"></i>} title={"Habitable"} />
                    <ShortInfoLayout info={planetDetail[0].Gravity} svg={<i class="fa-solid fa-atom"></i>} title={"Gravity"} />
                </div>
                <div className='LongDescription'>
                    <h5>Description:</h5>
                    <p>
                        {planetDetail[0].PlanetDesc}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default RenderPlanet