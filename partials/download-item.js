document.writeln(`
   <article class="card rounded-0 border-0 flex-row align-items-center">
      <div class="w-50 p-0">
         <div class="ratio ratio-1x1 w-100">
            <img src="img/book-company-profile.png" alt="Cover buku profil perusahaan Indraco" loading="lazy"
               class="object-fit-cover">
         </div>
      </div>
      <div class="card-body w-50 py-0">
         <h3 class="card-title fw-bold fs-5 text-capitalize">
            Profil Perusahaan
         </h3>
         <p id="desc-company-profile" class="card-text mb-4">Company profile, sejarah dan lini produk</p>
         <a href="company-profile.pdf" download aria-describedby="desc-company-profile"  class="btn btn-primary rounded-0">
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"> <path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
            Unduh
         </a>
      </div>
   </article>
`)