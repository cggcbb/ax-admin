import chroma from 'chroma-js'

const generateSimilarColor = (color: string, darker: boolean = false, level: number = 5): string => {
  const [l, a, b] = chroma(color).lab();
  return chroma.lab(l, a, darker ? b - level : b + level).hex()
}

// 生成颜色相似，稍深一点的颜色
export const generateDarkerColor = (color: string, level: number = 5): string => {
  return generateSimilarColor(color, true, level)
}

// 生成颜色相似，稍浅一点的颜色
export const generateLighterColor = (color: string, level: number = 5): string => {
  return generateSimilarColor(color, false, level)
}

