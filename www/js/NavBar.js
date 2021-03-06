class NavBar extends Base {

  render() {
    return /*html*/`
    <div class="container-md mb-4">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div><!-- <a class="navbar-brand" href="/">Dhyr & Rumson</a> Replaced by clickable HERO. But do not remove this div --></div>
        <button class="navbar-toggler btn-block btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icofont-navigation-menu icofont-lg"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            ${this.links.map(link => !link.dropdown ? /*html*/`
              <li class="nav-item">
                <a class="nav-link navbar-custom" href="${link.route}">
                  ${link.label}
                </a>
              </li>              
          ` : /*html*/`
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="${link.route}"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ${link.label}
                </a>
                <div class="dropdown-menu scrollable-menu" aria-labelledby="navbarDropdownMenuLink">
                  ${link.dropdown.map(item => /*html*/`
                    <a class="dropdown-item" href="${item.route}">${item.label}</a>
                  `)}
                </div>
              </li>
          `)}
          </ul>
        </div>
      </nav>
    </div>
    `
  }

}