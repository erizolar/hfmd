// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import '@cynber/vitepress-valence/style.css'
import { data as galleryData } from './gallery.data.js'
import { VpvImageGallery } from '@cynber/vitepress-valence'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('VpvImageGallery', VpvImageGallery) 
    app.provide('galleryData', galleryData)  
  }
}