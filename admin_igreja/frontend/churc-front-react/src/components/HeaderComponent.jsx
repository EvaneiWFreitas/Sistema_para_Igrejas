import React from 'react'

const HeaderComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand" href="#">SIS-IGREJA</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Igrejas</a>
                        
                    </div>
                </div>
            </div>
    </nav>
  )
}

export default HeaderComponent