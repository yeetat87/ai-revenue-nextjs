'use client'

import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    let animId
    let cleanup = () => {}

    import('three').then((THREE) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      const parent = canvas.parentElement
      renderer.setSize(parent.offsetWidth, parent.offsetHeight)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, parent.offsetWidth / parent.offsetHeight, 0.1, 100)
      camera.position.z = 4

      const particleCount = 200
      const geo = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8
        const isCyan = Math.random() > 0.3
        colors[i * 3] = isCyan ? 0 : 1
        colors[i * 3 + 1] = isCyan ? 0.94 : 0.18
        colors[i * 3 + 2] = isCyan ? 1 : 0.47
      }
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      const mat = new THREE.PointsMaterial({ size: 0.025, vertexColors: true, transparent: true, opacity: 0.6, sizeAttenuation: true })
      const particles = new THREE.Points(geo, mat)
      scene.add(particles)

      const sphereGeo = new THREE.IcosahedronGeometry(1.6, 2)
      const wireMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.06 })
      const sphere = new THREE.Mesh(sphereGeo, wireMat)
      scene.add(sphere)

      const innerGeo = new THREE.SphereGeometry(0.8, 32, 32)
      const innerMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.03 })
      const innerSphere = new THREE.Mesh(innerGeo, innerMat)
      scene.add(innerSphere)

      const ringGeo = new THREE.RingGeometry(2.2, 2.25, 64)
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xff2d78, transparent: true, opacity: 0.08, side: THREE.DoubleSide })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.rotation.x = Math.PI * 0.45
      scene.add(ring)

      const ring2Geo = new THREE.RingGeometry(2.8, 2.84, 64)
      const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.04, side: THREE.DoubleSide })
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
      ring2.rotation.x = Math.PI * 0.6
      ring2.rotation.y = Math.PI * 0.2
      scene.add(ring2)

      let mouseX = 0, mouseY = 0
      const onMouse = (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3
      }
      document.addEventListener('mousemove', onMouse)

      const animate = () => {
        animId = requestAnimationFrame(animate)
        const t = Date.now() * 0.0003
        particles.rotation.y = t * 0.3 + mouseX * 0.5
        particles.rotation.x = mouseY * 0.3
        sphere.rotation.y = t * 0.4
        sphere.rotation.x = t * 0.15
        ring.rotation.z = t * 0.2
        ring2.rotation.z = -t * 0.15
        innerSphere.scale.setScalar(1 + Math.sin(t * 3) * 0.05)
        renderer.render(scene, camera)
      }
      animate()

      const onResize = () => {
        const w = parent.offsetWidth
        const h = parent.offsetHeight
        renderer.setSize(w, h)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      window.addEventListener('resize', onResize)

      cleanup = () => {
        cancelAnimationFrame(animId)
        document.removeEventListener('mousemove', onMouse)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
      }
    })

    return () => cleanup()
  }, [])

  return <canvas ref={canvasRef} id="hero-canvas" />
}
