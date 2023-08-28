const phoneLoad = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = phones => {
 
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = "";

    const showAllBtn = document.getElementById('show-all-btn');
    if(phones.length > 9){
        showAllBtn.classList.remove('hidden');
    }else{
        showAllBtn.classList.add('hidden');
    }

    phones = phones.slice(0, 9);

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
    loadingDots(false);
}

const handleSearch = () => {
    loadingDots(true);
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    phoneLoad(inputFieldValue);
}

const loadingDots = (isLoading) =>{
    const loading = document.getElementById('loading-dots');
    
    if(isLoading){
        loading.classList.remove('hidden');
    }else {
        loading.classList.add('hidden');
    }
}

// phoneLoad();