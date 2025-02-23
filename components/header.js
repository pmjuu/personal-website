class Header extends HTMLElement {
  getBasePath() {
    const depth = window.location.pathname.split('/').filter(Boolean).length;

    return depth === 0 ? './' : '../'.repeat(depth);
  }

  constructor() {
    super();
  }

  connectedCallback() {
    const basePath = this.getBasePath();

    this.innerHTML = `
      <header>
        <a class="link" href="${basePath}index.html">Home</a>
        <a class="link" href="${basePath}pages/blog.html">Blog</a>
        <a class="link" href="${basePath}pages/projects.html">Projects</a>
        <a class="link" href="${basePath}pages/about.html">About</a>
      </header>
    `;
  }
}

export default function registerHeader() {
  customElements.define('app-header', Header);
}
