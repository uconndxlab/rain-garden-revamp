if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service_worker.js')
    .then(() => console.log("Service Worker Registered"))
    .catch(() => console.log('Service Worker Not Registered'))
}

var currently_selected_basics = document.querySelector('.selected_menu');

var page_title = document.querySelector('.section_header');

var basics_obj = {
  what: {
    swappable: "A Natural Filter<br/><br/>Rain gardens reduce water pollution while brightening the landscape. A rain garden is a shallow depression (about 6 inches deep) that collects runoff from a roof, driveway or yard and allows it to soak into the ground were pollutants can be absorbed by the soil. Rain Gardens are typically planted with shrubs or perennials, and can be colorful, landscaped areas in your yard that will also provide important environmental benefits.<br/><br/>Preventing Water Pollution<br/><br/>Every time it rains, water runs off hard surfaces such as roofs, driveways, roads and parking lots, collecting pollutants along the way and carrying them via storm drains to your local water body. This runoff has been cited by the United States Environmental Protection Agency (EPA) as a major source of pollution to our nation's waterways.<br/><br/>Benefits<br/><br/>* improve water quality<br/><br/>* reduce flooding<br/><br/>* recharge groundwater",
    img_src: "../assets/basics_photo.jpg",
    title: "BASICS"
  },
  how: {
    swappable: "Rain gardens reduce rain runoff by allowing stormwater to soak into the ground (as opposed to flowing into storm drains and surface waters which causes erosion, water pollution, flooding, and diminished groundwater). They can be designed for specific soils and climates. The purpose of a rain garden is to improve water quality in nearby bodies of water. Rain gardens can cut down on the amount of pollution reaching creeks and streams.<br/><br/> Native plants are recommended for rain gardens because they generally do not require fertilizer and are more tolerant of one's local climate, soil, and water conditions, and attract local wildlife such as native birds. The plants - a selection of wetland edge vegetation, such as wildflowers, sedges, rushes, ferns, shrubs and small trees - take up excess water flowing into the rain garden. Water filters through soil layers before entering the groundwater system. Root systems enhance infiltration, maintain or even augment soil permeability, provide moisture redistribution, and sustain diverse microbial populations involved in biofiltration. Also, through the process of transpiration, rain garden plants return water vapor to the atmosphere.<br/><br/> A more wide-ranging definition covers all the possible elements that can be used to capture, channel, divert, and make the most of the natural rain and snow that falls on a property. The whole garden can become a rain garden, and all of the individual elements that we deal with in detail are either components of it. or are small-scale rain gardens in themselves.",
    img_src: "../assets/how_photo.jpg",
    title: "How do they work?"
  },
  gallery: {
    one: {
      title: "Jordan Cove",
      img_src: "../assets/jordan_cove.jpg"
    },
    two: {
      title: "Haddam",
      img_src: "../assets/haddam.jpg"
    },
    three: {
      title: "Rutgers",
      img_src: "../assets/rutgers.jpg"
    },
    four: {
      title: "Jordan Cove 2",
      img_src: "../assets/jordan_cove_2.jpg"
    },
    five: {
      title: "Haddam 2",
      img_src: "../assets/haddam_2.jpg"
    },
    six: {
      title: "Rain Garden",
      img_src: "../assets/rain_garden.jpg"
    },
    seven: {
      title: "Tolland",
      img_src: "../assets/tolland.jpg"
    }
  },
  videos: {
    one: {
      title: "Digging",
      video_src: 'https://www.youtube.com/embed/hF1rqCaPhd4'
    },
    two: {
      title: "Rain Garden Plan Selection",
      video_src: 'https://www.youtube.com/embed/OLoeABcqhHs'
    },
    three: {
      title: "Rain Garden Sizing",
      video_src: 'https://www.youtube.com/embed/tkPpHXmdRGE'
    },
    four: {
      title: "Rain Garden Placement",
      video_src: 'https://www.youtube.com/embed/lJ8N_SiSiu8'
    },
    five: {
      title: "Rain Garden Maintenance",
      video_src: 'https://www.youtube.com/embed/wTvoNRAk4bM'
    },
    six: {
      title: "Rain Garden Soil Test",
      video_src: 'https://www.youtube.com/embed/0SNUGClCieo'
    },
  }
}

//** These try/catch blocks are for handling the basics switching cases **//
try{
  document.querySelector('.videos_btn').addEventListener('click', () => {
  try {
    document.querySelector('.img_cont_wrapper').style.display = "none";
  } catch {

  }
  currently_selected_basics.classList.remove('selected_menu');
  document.querySelector('.videos_btn').classList.add('selected_menu');
  currently_selected_basics = document.querySelector('.videos_btn');
  document.querySelector('.info_cont > img').style.display = "none";
  document.querySelector('.info_cont > p').style.display = "none";
  page_title.innerHTML = "VIDEOS";
  try {
    document.querySelector('.vid_cont_wrapper').style.display = "flex";
  } catch {
    var vid_wrapper = document.createElement('div');
    vid_wrapper.setAttribute('class', 'vid_cont_wrapper');

    Object.keys(basics_obj.videos).forEach((item) => {
      var curr_obj = basics_obj.videos[item];
      console.log(curr_obj);
      var new_div_cont = document.createElement('div');
      new_div_cont.setAttribute('class', 'vid_cont');

      var new_header = document.createElement('h1');
      new_header.innerHTML = curr_obj.title;

      var new_vid = document.createElement('iframe');
      new_vid.src = curr_obj.video_src;

      new_div_cont.appendChild(new_header);
      new_div_cont.appendChild(new_vid);

      vid_wrapper.appendChild(new_div_cont);
    });
  }
    document.querySelector('.info_cont').appendChild(vid_wrapper);
});
} catch {}
try{
  document.querySelector('.gallery_btn').addEventListener('click', () => {
  try{
    document.querySelector('.vid_cont_wrapper').style.display = "none";
  } catch{

  }
  currently_selected_basics.classList.remove('selected_menu');
  document.querySelector('.gallery_btn').classList.add('selected_menu');
  currently_selected_basics = document.querySelector('.gallery_btn');
  document.querySelector('.info_cont > img').style.display = "none";
  document.querySelector('.info_cont > p').style.display = "none";
  page_title.innerHTML = "GALLERY";
  try {
    document.querySelector('.img_cont_wrapper').style.display = "flex";
  } catch {
    var img_wrapper = document.createElement('div');
    img_wrapper.setAttribute('class', 'img_cont_wrapper');

    Object.keys(basics_obj.gallery).forEach((item) => {
      var curr_obj = basics_obj.gallery[item];
      console.log(curr_obj);
      var new_div_cont = document.createElement('div');
      new_div_cont.setAttribute('class', 'img_cont');

      var new_header = document.createElement('h1');
      new_header.innerHTML = curr_obj.title;

      var new_img = document.createElement('img');
      new_img.src = curr_obj.img_src;

      new_div_cont.appendChild(new_header);
      new_div_cont.appendChild(new_img);

      img_wrapper.appendChild(new_div_cont);
    });
  }
  console.log(img_wrapper);
  document.querySelector('.info_cont').appendChild(img_wrapper);
});
} catch {}
try{
  document.querySelector('.what_btn').addEventListener('click', () => {
  try {
    document.querySelector('.img_cont_wrapper').style.display = "none";
  } catch {

  }
  try{
    document.querySelector('.vid_cont_wrapper').style.display = "none";
  } catch{

  }
  currently_selected_basics.classList.remove('selected_menu');
  document.querySelector('.what_btn').classList.add('selected_menu');
  currently_selected_basics = document.querySelector('.what_btn');
  document.querySelector('.info_cont > img').style.display = "flex";
  document.querySelector('.info_cont > p').style.display = "flex";
  page_title.innerHTML = basics_obj.what.title;
  document.querySelector('.info_cont > img').src = "../assets/basics_photo.jpg";
  document.querySelector('.info_cont > p').innerHTML = basics_obj.what.swappable;
});
} catch {}
try{
  document.querySelector('.how_btn').addEventListener('click', () => {
  try {
    document.querySelector('.img_cont_wrapper').style.display = "none";
  } catch {

  }
  try{
    document.querySelector('.vid_cont_wrapper').style.display = "none";
  } catch{

  }
  currently_selected_basics.classList.remove('selected_menu');
  document.querySelector('.how_btn').classList.add('selected_menu');
  currently_selected_basics = document.querySelector('.how_btn');
  document.querySelector('.info_cont > img').style.display = "flex";
  document.querySelector('.info_cont > p').style.display = "flex";
  page_title.innerHTML = basics_obj.how.title;
  document.querySelector('.info_cont > img').src = "../assets/how_photo.jpg";
  document.querySelector('.info_cont > p').innerHTML = basics_obj.how.swappable;
});
} catch {}
