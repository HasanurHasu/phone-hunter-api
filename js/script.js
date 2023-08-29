const phoneLoad = async (searchText = "samsung", isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    // console.log(phones);

    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = "";

    const showAllBtn = document.getElementById('show-all-btn');
    if (phones.length > 9) {
        showAllBtn.classList.remove('hidden');
    } else {
        showAllBtn.classList.add('hidden');
    }

    if (!isShowAll) {
        phones = phones.slice(0, 9);
    }

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
            <button onclick="handleShowDetails('${phone.slug}')"  class="btn btn-primary py-2 px-6 text-white">Show Details</button>
        </div>
        </div>  
        `;
        phonesContainer.appendChild(div);

    });
    loadingDots(false);
}

const handleSearch = (isShowAll) => {
    loadingDots(true);
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    phoneLoad(inputFieldValue, isShowAll);
}

const loadingDots = (isLoading) => {
    const loading = document.getElementById('loading-dots');

    if (isLoading) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}

const handleShowAll = () => {
    handleSearch(true);
}

const handleShowDetails = async (id) => {
    
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phoneData = data.data;
    console.log(phoneData);


    showPhoneDetails(phoneData);
}

const showPhoneDetails = (phoneData) => {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
    <div class="flex flex-col items-center">
    <img src="${phoneData.image}" alt="">
    </div>
    <h3 class="font-bold text-lg">${phoneData.name}</h3>
     <p class="py-1 text-sm text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
     <p class="py-1 text-[#706F6F] text-sm text-left"><span class="text-black font-semibold">Storage :</span> ${phoneData.mainFeatures?.storage || 'No Storage'}</p>
     <p class="py-1 text-[#706F6F] text-sm text-left"><span class="text-black font-semibold">Display Size :</span> ${phoneData.mainFeatures?.displaySize}</p>
     
     <p class="py-1 text-[#706F6F] text-sm text-left"><span class="text-black font-semibold">Chipset :</span> ${phoneData.mainFeatures?.chipSet}</p>
     <p class="py-1 text-[#706F6F] text-sm text-left"><span class="text-black font-semibold">Memory :</span> ${phoneData.mainFeatures?.memory}</p>
     <p class="py-1 text-[#706F6F] text-sm text-left"><span class="text-black font-semibold">Brand :</span> ${phoneData.brand}</p>

     <div class="modal-action">
         <!-- if there is a button in form, it will close the modal -->
         <button class="btn">Close</button>
     </div>
    
    `



    my_details_modal.showModal()
}

phoneLoad();