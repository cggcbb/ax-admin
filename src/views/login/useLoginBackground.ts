import * as THREE from 'three'

export default function useLoginBackground(loginWrapper: any) {
  let renderer: null | THREE.WebGLRenderer = null
  let camera: null | THREE.PerspectiveCamera = null

  const initBackground = async () => {
    // 创建场景
    const scene = new THREE.Scene()

    // 创建相机
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // 创建渲染器
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    loginWrapper.value!.appendChild(renderer.domElement)

    // 创建粒子系统
    const particleCount = 20000
    const particles = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 500 - 250
      const y = Math.random() * 500 - 250
      const z = Math.random() * 500 - 250

      particles[i * 3] = x
      particles[i * 3 + 1] = y
      particles[i * 3 + 2] = z

      colors[i * 3] = x / 500 + 0.5
      colors[i * 3 + 1] = y / 500 + 0.5
      colors[i * 3 + 2] = z / 500 + 0.5

      sizes[i] = 1
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(particles, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: 0.2,
      color: Math.random() * 0xffffff
    })

    const particleSystem = new THREE.Points(geometry, material)
    scene.add(particleSystem)

    // 渲染场景
    const render = () => {
      requestAnimationFrame(render)
      particleSystem.rotation.x += 0.0002
      particleSystem.rotation.y += 0.0002
      renderer!.render(scene, camera!)
    }
    render()
  }

  const handleResize = () => {
    renderer!.setSize(window.innerWidth, window.innerHeight)
    camera!.aspect = window.innerWidth / window.innerHeight
    camera!.updateProjectionMatrix()
  }

  onBeforeMount(() => {
    window.removeEventListener('resize', handleResize)
  })

  onMounted(async () => {
    await initBackground()
    window.addEventListener('resize', handleResize)
  })
}
