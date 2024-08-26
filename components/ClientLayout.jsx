"use clientt"
import { NextScript } from 'next/document'
import React from 'react'

const ClientLayout = () => {
  return (
    <>
      <NextScript>
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            defer
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
            defer
          ></script>
        </NextScript>
    </>
  )
}

export default ClientLayout
