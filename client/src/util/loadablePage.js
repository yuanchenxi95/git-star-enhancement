import Loadable from 'react-loadable'
import React from 'react'

export const generateLoadablePage = (page) => {
  return Loadable({
    loader: () => page,
    loading() {
      return <div>Loading...</div>
    },
  })
}