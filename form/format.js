document.addEventListener("DOMContentLoaded", () => {
    const b = (e,v) => e.style.border = v ? "2px solid green" : "2px solid red";
    const m = (e,v,t) => { b(e,v); if(e.nextElementSibling) e.nextElementSibling.textContent = v?"":t };
    const block = (el, fn) => {
        if(!el) return;
        el.addEventListener("keydown", fn);
        el.addEventListener("keyup", fn);
        el.addEventListener("blur", fn);
        el.addEventListener("focus", fn);
    };
    block(document.querySelector(".val-otp"), e=>{
        if(e.type==="keydown"){
            if(!/^[0-9]$/.test(e.key) && e.key.length===1) e.preventDefault();
            if(e.target.value.length>=4 && e.key.length===1) e.preventDefault();
        }
        m(e.target, e.target.value.length===4, "4 digits");
    });
        block(document.querySelector(".val-mobile"), e=>{
        if(e.type==="keydown"){
            if(!/^[0-9]$/.test(e.key) && e.key.length===1) e.preventDefault();
            if(e.target.value.length>=10 && e.key.length===1) e.preventDefault();
        }
        m(e.target, e.target.value.length===10, "10 digits required");
    });

    block(document.querySelector(".val-pincode"), e=>{
        if(e.type==="keydown"){
            if(!/^[0-9]$/.test(e.key) && e.key.length===1) e.preventDefault();
            if(e.target.value.length>=6 && e.key.length===1) e.preventDefault();
        }
        m(e.target, e.target.value.length===6, "6 digits");
    });
    block(document.querySelector(".val-username"), e=>{
        if(e.type==="keydown"){
            if(!/^[A-Za-z]$/.test(e.key) && e.key.length===1) e.preventDefault();
        }
        m(e.target, /^[A-Za-z]+$/.test(e.target.value), "Letters only");
    });
    block(document.querySelector(".val-address"), e=>{
        if(e.type==="keydown" && e.target.value.length>=250 && e.key.length===1) e.preventDefault();
        m(e.target, e.target.value.trim()!=="", "Required");
    });
    block(document.querySelector(".val-mark"), e=>{
        if(e.type==="keydown"){
            if(!/^[0-9]$/.test(e.key) && e.key.length===1) e.preventDefault();
            if(e.target.value.length>=3 && e.key.length===1) e.preventDefault();
        }
        if(+e.target.value>100) e.target.value="100";
        m(e.target, e.target.value!=="", "Required");
    });
    block(document.querySelector(".val-aadhar"), e=>{
        if(e.type==="keydown"){
            if(!/^[0-9]$/.test(e.key) && e.key.length===1) e.preventDefault();
            if(e.target.value.length>=12 && e.key.length===1) e.preventDefault();
        }
        m(e.target, e.target.value.length===12, "12 digits");
    });

    const dob = document.querySelector(".val-dob");
    if(dob){
        const today = new Date().toISOString().split("T")[0];
        dob.max = new Date(Date.now()-86400000).toISOString().split("T")[0];
        block(dob, e=> m(e.target, e.target.value && e.target.value<today, "Invalid"));
    }

    block(document.querySelector(".val-initial"), e=>{
        if(e.type==="keydown"){
            if(!/^[A-Za-z]$/.test(e.key) && e.key.length===1) e.preventDefault();
            if(e.target.value.length>=2 && e.key.length===1) e.preventDefault();
        }
        m(e.target, e.target.value.length===2, "2 letters");
    });

    block(document.querySelector(".val-year"), e=>{
        if(e.type==="keydown"){
            if(!/[0-9]/.test(e.key) && e.key.length===1) e.preventDefault();
            if(e.target.value.length>=4 && e.key.length===1) e.preventDefault();
        }
        m(e.target, e.target.value.length===4, "4 digits");
    });
    block(document.querySelector(".val-email"), e=>{
        const t = e.target;

        if(e.type==="keydown"){
            if(!/[A-Za-z0-9@._]/.test(e.key) && e.key.length===1) e.preventDefault();
            if(e.key===" " ) e.preventDefault();
            if(e.key==="@" && t.value.includes("@")) e.preventDefault();
        }

        const ok = /^[A-Za-z0-9._]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(t.value);
        m(t, ok, "Invalid email");
    });

    block(document.querySelector(".val-vehicle"), e=>{
        const t = e.target;
        if(e.type==="keydown"){
            if(!/[A-Za-z0-9]/.test(e.key) && e.key.length===1) e.preventDefault();
            if(t.value.length>=12 && e.key.length===1) e.preventDefault();
        }
        t.value = t.value.toUpperCase();
        const ok = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/.test(t.value);
        m(t, ok, "XX00X/XX0000");
    });
});






  const southIndiaStatesAndDistricts = [
            {state: "Andhra Pradesh", districts: ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Sri Potti Sriramulu Nellore", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"]},
            {state: "Karnataka", districts: ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"]},
            {state: "Kerala", districts: ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"]},
            {state: "Tamil Nadu", districts: ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"]},
            {state: "Telangana", districts: ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"]}
        ];
