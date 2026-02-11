document.writeln(`
   <article itemscope itemtype="https://schema.org/NewsArticle" class="card rounded-0 border-0 bg-light-subtle">
      <meta itemprop="author" content="Indraco">
      <meta itemprop="publisher" content="Indraco">
      <meta itemprop="dateModified" content="2026-12-01">
      <header class="card-header ratio ratio-16x9 w-100 border-0">
         <img itemprop="image" src="img/gallery.jpg" alt="" loading="lazy" class="object-fit-cover z-0">
         <div class="z-1 inset-0 gradient-top-top"></div>
         <div class="top-unset bottom-0 h-auto p-4 z-2">
            <h3 itemprop="headline" class="card-title fs-5 text-3-line text-capitalize fw-bold">
               <span class="text-decoration-none text-reset">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </span>
            </h3>
         </div>
      </header>
      <div class="card-body p-4 text-bg-primary">
         <time itemprop="datePublished" datetime="2026-12-01" class="small">
            01 Desember 2026
         </time>
         <hr class="my-2">
         <p itemprop="description" class="card-text text-3-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error commodi aut, eaque ipsum nesciunt soluta nobis? Repellendus nemo itaque asperiores deleniti architecto possimus tempora, repellat earum voluptatum dolor neque!
         </p>               
         <a href="#" itemprop="url" class="stretched-link text-capitalize">
            lanjut baca
         </a>
      </div>
   </article>
`)