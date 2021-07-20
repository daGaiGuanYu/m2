import React from 'react'

import './index.styl'
import Aside from './aside/index.jsx'
import Article from './article.jsx'

export default function() {
  return <main className="page-container home">
    <Aside />
    <Article />
  </main>
}