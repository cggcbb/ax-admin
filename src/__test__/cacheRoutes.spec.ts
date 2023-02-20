import { getCacheRoutesName, swapSpecifiedRouteToFirst } from '~/utils/routes'
import { describe, expect, it } from 'vitest'

describe('getCacheRoutesName', () => {
  it('no meta cache option', () => {
    const routes: any = [
      {
        path: '/aaa',
        name: 'aaa'
      },
      {
        path: '/bbb',
        name: 'bbb'
      }
    ]
    const result = getCacheRoutesName(routes)
    expect(result.length).toBe(0)
    expect(result).not.contains('aaa')
    expect(result).not.contains('bbb')
  })

  it('has meta cache option', () => {
    const routes: any = [
      {
        path: '/aaa',
        name: 'aaa',
        meta: {
          cache: true
        }
      },
      {
        path: '/bbb',
        name: 'bbb'
      }
    ]
    const result = getCacheRoutesName(routes)

    expect(result.length).toBe(1)
    expect(result).contain('aaa')
    expect(result).not.contains('bbb')
  })

  it('no meta cache option, but has children', () => {
    const routes: any = [
      {
        path: '/aaa',
        name: 'aaa',
        children: [
          {
            path: '/ccc',
            name: 'ccc'
          },
          {
            path: '/ddd',
            name: 'ddd'
          }
        ]
      },
      {
        path: '/bbb',
        name: 'bbb'
      }
    ]
    const result = getCacheRoutesName(routes)

    expect(result.length).toBe(0)
  })

  it('has meta cache option, and has children', () => {
    const routes: any = [
      {
        path: '/aaa',
        name: 'aaa',
        meta: {
          cache: true
        },
        children: [
          {
            path: '/ccc',
            name: 'ccc',
            meta: {
              cache: true
            }
          },
          {
            path: '/ddd',
            name: 'ddd'
          }
        ]
      },
      {
        path: '/bbb',
        name: 'bbb',
        meta: {
          cache: true
        }
      }
    ]
    const result = getCacheRoutesName(routes)

    expect(result.length).toBe(3)
    expect(result).contains('aaa')
    expect(result).contains('ccc')
    expect(result).contains('bbb')
    expect(result).not.contains('ddd')
  })
})

describe('swapSpecifiedRouteToFirst', () => {
  it('not find specified ', () => {
    const rList: any = [
      {
        meta: {
          title: 'aaa'
        }
      },
      {
        meta: {
          title: 'bbb'
        }
      },
      {
        meta: {
          title: 'ccc'
        }
      }
    ]
    const result = swapSpecifiedRouteToFirst(rList, 'ddd')
    expect(result[0].meta?.title).toBe('aaa')
    expect(result[1].meta?.title).toBe('bbb')
    expect(result[2].meta?.title).toBe('ccc')
  })

  it('specified is current first', () => {
    const rList: any = [
      {
        meta: {
          title: 'aaa'
        }
      },
      {
        meta: {
          title: 'bbb'
        }
      },
      {
        meta: {
          title: 'ccc'
        }
      }
    ]
    const result = swapSpecifiedRouteToFirst(rList, 'aaa')
    expect(result[0].meta?.title).toBe('aaa')
    expect(result[1].meta?.title).toBe('bbb')
    expect(result[2].meta?.title).toBe('ccc')
  })

  it('specified is not current first', () => {
    const rList: any = [
      {
        meta: {
          title: 'aaa'
        }
      },
      {
        meta: {
          title: 'bbb'
        }
      },
      {
        meta: {
          title: 'ccc'
        }
      }
    ]
    const result = swapSpecifiedRouteToFirst(rList, 'ccc')
    expect(result[0].meta?.title).toBe('ccc')
    expect(result[1].meta?.title).toBe('bbb')
    expect(result[2].meta?.title).toBe('aaa')
    // is add?
    expect(result[3]).toBeUndefined()
  })
})
