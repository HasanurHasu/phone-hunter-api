const phoneLoad = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = phones => {
    console.log(phones);
    const phonesContainer = document.getElementById('phones-container');
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList = `card bg-base-100 border-[1px] border-[#CFCFCF]	border-solid round-sm`;
        div.innerHTML = `
        <figure class="px-10 pt-10">
        <img src= ${phone.image} alt="Shoes" class="rounded-xl" />
         </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p class="my-4 text-lg">There are many variations of passages of available, but the majority have suffered</p>
        <div class="card-actions">
            <button class="btn btn-primary py-2 px-6 text-white">Show Details</button>
        </div>
        </div>  
        `;
    phonesContainer.appendChild(div);
    });
}

phoneLoad();