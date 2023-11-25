let dataQur = [
  {
    author: "Muhamad Abidin",
    quote: "Dengan inovasi dan teknologi, sepertinya kita lupa untuk menghargai keindahan sejati yang ditawarkan",
    image: "/image/abidin.jpeg",
    rating: 5,
  },
  {
    author: "Muhamad Abidin",
    quote: "Teknologi berkembang dengan sendirinya. Teknologi memungkinkan lebih banyak teknologi",
    image: "/image/p2.jpg",
    rating: 5,
  },
  {
    author: "Muhamad Abidin",
    quote: "Kemajuan teknologi didasarkan bagaimana membuatnya cocok sehingga anda tidak benar-benar menyadarinya, hingga menjadi bagian keseharian dalam hidup ",
    image: "/image/LLLL.png",
    rating: 4,
  },
  {
    author: "Muhamad Abidin",
    quote: "Teknologi itu diciptakan untuk mempermudah hidup orang lain, kan? Bukannya membuat orang jadi tambah susah atau tambah sesat",
    image: "/image/versi1.jpg",
    rating: 2,
  },
  {
    author: "Muhamad Abidin",
    quote: "Teknologi itu diciptakan untuk mempermudah hidup orang lain, kan? Bukannya membuat orang jadi tambah susah atau tambah sesat",
    image: "/image/p2.jpg",
    rating: 1,
  },
  {
    author: "Muhamad Abidin",
    quote: "Teknologi itu diciptakan untuk mempermudah hidup orang lain, kan? Bukannya membuat orang jadi tambah susah atau tambah sesat",
    image: "/image/versi2.jpg",
    rating: 3,
  },
];

function html(kerangka) {
  return `
    <div class="testimonial">
    <img
      src="${kerangka.image}"
      class="profile-testimonial"
    />
    <p class="quote">
      ${kerangka.quote}
    </p>
    <p class="author">- ${kerangka.author}</p>
    <p class="author">${kerangka.rating}<i class="fa-solid fa-star"></i> </p>
  </div>
    `;
}

function allTestimonials() {
  let testimonials = "";
  dataQur.forEach((data) => {
    testimonials += html(data);
  });

  document.getElementById("Qu-testimonials").innerHTML = testimonials;
}
allTestimonials();

function QuFiltered(rating) {
  let testimonials = "";

  const dataFiltered = dataQur.filter((item) => {
    return item.rating == rating;
  });
  // console.log(dataFiltered);
  if (dataFiltered == 0) {
    testimonials += `<h1>Data Not Found</h1>`;
  } else {
    dataFiltered.forEach((dataBaru) => {
      testimonials += html(dataBaru);
    });
  }
  document.getElementById("Qu-testimonials").innerHTML = testimonials;
}
