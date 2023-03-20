"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Cuboido = () => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    controlsRef.current = new OrbitControls(
      cameraRef.current,
      rendererRef.current.domElement
    );
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    const controls = controlsRef.current;

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    renderer.setClearColor(0x000000, 1);

    function addStars() {
      const starColors = [
        "#00EEEE",
        "#00CDCD",
        "#008B8B",
        "#0000FF",
        "#0000EE",
        "#0000CD",
        "#00008B",
        "#00FFFF",
        "#ffffff", // white
        "#ffff00", // yellow
        "#ffcc00", // orange
        "#ff6600", // red-orange
        "#ff0000", // red
        "#9900cc", // purple
        "#0000ff", // blue
        "#00ffff", // cyan
        "#00ff00", // green
      ];
      const star = new THREE.Mesh(
        new THREE.SphereGeometry(Math.random() * 9),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color().set(
            starColors[Math.floor(Math.random() * starColors.length)]
          ),
        })
      );
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(1000));
      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(2500).fill().forEach(addStars);
    camera.position.x = -1500;
    camera.position.y = -700;
    camera.position.z = 1000;

    controls.update();
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5.4;

    camera.lookAt(0, 0, 0);

    const animate = () => {
      requestAnimationFrame(animate);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <></>;
};

export default Cuboido;
