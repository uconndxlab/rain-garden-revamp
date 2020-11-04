if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../service_worker.js').then(function(registration) {
      // Registration was successful
      console.log('Service Worker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('Service Worker registration failed: ', err);
    });
  });
}

var state_translations = {
  connecticut: "7",
  delaware: "8",
  georgia: "11",
  hawaii: "12",
  indiana: "15",
  iowa: "16",
  maine: "20",
  maryland: "21",
  massachusetts: "22",
  michigan: "23",
  minnesota: "24",
  nevada: "29",
  new_hampshire: "30",
  new_jersey: "31",
  new_york: "33",
  north_carolina: "34",
  ohio: "36",
  oklahoma: "37",
  pennsylvania: "39",
  rhode_island: "41",
  south_carolina: "42",
  vermont: "47",
  virginia: "48"
}

var currently_selected = document.querySelector('.selected_menu');
var page_title = document.querySelector('.section_header');
var sidebar_is_open = false;

function toggle_sidebar(){
  var sidebar = document.querySelector('.sidebar');
  if(sidebar_is_open){
    // we want to close it
    sidebar.style.left = "100%";
    sidebar_is_open = false;
    var timeout = setTimeout(() => {
      sidebar.style.display = "none";
      clearTimeout(timeout);
    }, 500);
  } else {
    sidebar.style.display = "flex";
    var timeout = setTimeout(() => {
      sidebar.style.left = "0%";
      sidebar_is_open = true;
      clearTimeout(timeout);
    }, 100);
  }
}

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
var design_obj = {
  locations: {
    swappable: "Planning your rain garden is an important step and should not be overlooked. For most residential settings, you will be trying to capture runoff from your house roof and directing it to your rain garden. This can be accomplished by piping the downspout directly into your garden,or by letting it run over grass before entering the garden. Here are several points to consider when choosing the site in your yard.<br/><br/>1. Avoid placing the rain garden in a low spot in the yard that always seems wet. A rain garden is not a water garden or a wetland. Placing it poorly drained soils may lead to slow infiltration and unwanted long term ponding.<br/><br/>2. Keep your rain garden at least 1O feet away from your house if you have a basement. Infiltrating water close to your foundation can lead to water problems in the basement.<br/><br/>3. Do not install a rain garden in an area where bedrock or stone outcrops are closer than 2 feet to the surface.<br/><br/>4. Place your rain garden at least 25 feet away from wells and septic systems. Rain gardens placed downnhill from a septic field should be at least 50 feet away. Rain gardens placed too close to these areas could cause unwanted infiltration into drinking water, add excess water to a septic field, or collect septic effluent.<br/><br/>5. Avoid steep slopes. Rain gardens can be installed using a retaining wall design on moderate slopes, but the construction of this type of garden is more complicated.<br/><br/>6. Plan for overflow from the garden. Although your garden will be sized to contain the most frequent storms, it will likely not contain the increased volumes of water from larger storms. In most cases the garden will overflow to your lawn, but just make sure overflow is not directed towards your foundation.",
    title: "Location",
    iframe_src: "https://www.youtube.com/embed/lJ8N_SiSiu8"
  },
  soils: {
    swappable: "Checking your soil is a critical step in choosing a site for your rain garden. The soil drainage map will give you a general idea of how well the soils should drain in your location. Soils with drainage between moderately well drained and excessively drained are generally suitable for a rain garden. However, even if the map says that your soils are well drained, your site could have compacted soils that may keep your garden from draining. It is a good idea to do a percolation test at your site to verify that your soils are OK.",
    iframe_src: "https://www.youtube.com/embed/0SNUGClCieo",
    button_title: "View Soils Map",
    button_href: "https://www.google.com" /*This is a placeholder*/ ,
    title: "Soils"
  },
  sizing: {
    swappable: "The size of your rain garden is determined by how much impervious area such as a roof or driveway drains to it. A typical rain garden has about a 6 inch deep surface depression. The two methods here will give you a recommended size for your garden.<br /><br />To use the sizing calculator, you will need to take some measurements of the dimensions of your home.<br /><br /> 1. Measure the footprint of your house. This is the area taken up by your house if looking down from above. Multiply the length by the width of the house, the answer will be in square feet.<br /><br />2. Estimate how much of the area actually drains to the area where you want to install the garden. Typically, gutters drain to both ends of the house, so the length can be cut in half, but this is not always the case.<br /><br />3. If you are collecting runoff from your driveway or a section of road, just estimate the size of the impervious surface draining to the spot where you want to put the garden, and continue to step 4.<br /><br />4. Enter this area into the sizing calculator, and it will give you the recommended rain garden size.<br /><br />To use the sizing map, locate your building on the aerial image. Tap on the screen to make a shape of the area the drains to the area where you want to install your garden. The app will calculate the size of this area, and give you the recommended rain garden size.",
    title: "Sizing"
  },
  cbyd: {
    swappable: "Although you are not required to notify Call Before You Dig (CBYD) for shallow excavations done by hand, CBYD encourages you to call. Even hand tools can damage utility lines. If you are using any type of heavy equipment, you are required by law to call. Dial 1 ·800-922-4455 (for Connecticut), or 811 (for most states). One important note: this service will not locate small utility lines such as wires run from your house to outside fixtures. These things are your responsibility to locate.",
    button_title: "Dial Call Before You Dig (CBYD)",
    button_href: "https://www.google.com" /*This is a placeholder*/ ,
    title: "CBYD"
  }
}
var install_obj = {
  excavate: {
    swappable: "1. Mark out the area of the garden, based on the size you calculated for the drainage area. If the area is flat, you can remove 8-9 inches of soil from the whole area. Shape a gentle slope from the bottom of the garden to the surrounding lawn area.<br /><br />2. If the area is sloped, you can use some of the soil that you removed from the garden to build a berm at the lower end. If you are removing turf to install your garden, you can use some of the turf pieces on the berm so vegetation can be established quickly, and erosion potential can be reduced. When you are constructing the berm, try to make it the same level across the berm. If there is one area that is lower than the rest, overflow from the garden during a large storm may concentrate there, and cause erosion as water flows out. Keeping the water spread out is the best way to avoid erosion.<br /><br />3. Take a shovel full of soil from the bottom, in the area where you will be planting. If the soil at the bottom looks the same as the top layer of soil that you removed, you can plant directly into it. If the subsoil is lighter in color, or appears compacted, you may need to loosen it and add an amendment like compost when planting. A rototiller can be used to loosen the soil and integrate compost at the same time.<br /><br />If your soils were slow to drain, it may mean that you have high clay content. If you have the means, you can make the garden a little bigger to account for slower infiltration rate. Alternatively, you can dig the garden a little deeper, and mix some compost in. If these things are not possible, don't worry. The garden will still infiltrate some water, and every little bit helps.",
    iframe_src: "https://www.youtube.com/embed/hF1rqCaPhd4",
    title: "Install"
  },
  layout: {
    swappable: "There are some general concepts that you can follow when planting to make your garden function well, and look pleasing to the eye.<br /><br />1. Plan for future growth. Plant descriptions will include the mature size, so don't over-plant. However, if a 'fuller' look is desired early on, it is OK to have plants a bit close together.<br /><br />2. Try to group plants in odd numbers, and avoid planting in straight lines.<br /><br />3. Arrange plants so that taller ones won't block the view of shorter ones.<br /><br />4. Some plants will do better in different parts of the rain garden, like the bottom or the side slope. Many will do OK in any area in the garden. The plant catalog will specify this.<br /><br />5. Have fun! You will be the one looking at this garden, so make it however feels right for you.",
    iframe_src: "https://www.youtube.com/embed/OLoeABcqhHs",
    title: "Lay Out Plants"
  },
  planting: {
    swappable: "1. Dig the holes for the plants. The holes should be at least twice as wide as the plant's root structure and deep enough so that the surface of soil in the pot is level with the soil in the bottom of the garden.<br /><br />2. Amend the soil as needed.<br /><br />3. If the plants are root-bound, try to loosen up the roots before planting them.<br /><br />4. Once all the plants are installed, you are ready for mulching, Add about 2-3 inches of mulch, being careful not to put the mulch too close to the plants base.<br /><br />5. Water your plants immediately after planting and one inch of water per week (unless it rains) until the plants are established.",
    iframe_src: "https://www.youtube.com/embed/OLoeABcqhHs",
    title: "Planting"
  },
  maintain: {
    swappable: "Although native plants have low fertilizer and water needs once established, they will need care in the short term.<br /><br />Short-term<br /><br />1. After planting, the plants should get an inch of water per week. If it does not rain, provide supplemental irrigation for 1-2 months, or longer if drought conditions exist.<br /><br />2. Inspect the area(s) where water enters and exists the garden for erosion. Make repairs as necessary, and add extra stones if needed to dissipate energy.<br /><br />3. Remove any weeds or invasive species that may start to grow in the garden.<br /><br />Long-term<br /><br />1. Remove any dead branches from shrubs or trees, and dead vegetation from perennials and grasses. Depending on the look that you want from your garden, you can prune shrubs to keep them smaller, or let them grow larger. This will not impact the function of the garden.<br /><br />2. Remove weeds/invasives as needed.<br /><br />3. Add a thin layer of mulch ar.nually, if desired. Alternatively, vegetated ground covers can be used. USE CAUTION WHEN ADDING MULCH! Do not add excessive amounts of mulch; this can fill up the storage area, or block the flow of entrance to the garden.<br /><br />4. Inspect for erosion at the entrance/exit points, and/or sediment buildup in the top layer of the garden. If erosion occurred, remove the sediment and correct the problem.",
    iframe_src: "https://www.youtube.com/embed/wTvoNRAk4bM",
    title: "Maintain"
  }
}

//** These try/catch blocks are for handling the basics content-switching cases **//
try{
  document.querySelector('.videos_btn').addEventListener('click', () => {
  try {
    document.querySelector('.img_cont_wrapper').style.display = "none";
  } catch {

  }
  currently_selected.classList.remove('selected_menu');
  document.querySelector('.videos_btn').classList.add('selected_menu');
  currently_selected = document.querySelector('.videos_btn');
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
  currently_selected.classList.remove('selected_menu');
  document.querySelector('.gallery_btn').classList.add('selected_menu');
  currently_selected = document.querySelector('.gallery_btn');
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
  currently_selected.classList.remove('selected_menu');
  document.querySelector('.what_btn').classList.add('selected_menu');
  currently_selected = document.querySelector('.what_btn');
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
  currently_selected.classList.remove('selected_menu');
  document.querySelector('.how_btn').classList.add('selected_menu');
  currently_selected = document.querySelector('.how_btn');
  document.querySelector('.info_cont > img').style.display = "flex";
  document.querySelector('.info_cont > p').style.display = "flex";
  page_title.innerHTML = basics_obj.how.title;
  document.querySelector('.info_cont > img').src = "../assets/how_photo.jpg";
  document.querySelector('.info_cont > p').innerHTML = basics_obj.how.swappable;
});
} catch {}

//** These try/catch blocks are for handling the design content-switching cases **//

function remove_existing_buttons(){
  var all_buttons = document.querySelectorAll('.column_start > a');
  all_buttons.forEach((item) => {
    document.querySelector('.column_start').removeChild(item);
  });
}

try{
  document.querySelector('.locations_btn').addEventListener('click', () => {
    remove_existing_buttons();
    document.querySelector('.info_cont > .column_start > iframe').style.display = "flex";
    currently_selected.classList.remove('selected_menu');
    document.querySelector('.locations_btn').classList.add('selected_menu');
    currently_selected = document.querySelector('.locations_btn');
    document.querySelector('.info_cont > .column_start > iframe').src = design_obj.locations.iframe_src;
    document.querySelector('.info_cont > p').innerHTML = design_obj.locations.swappable;
    page_title.innerHTML = "DESIGN";
});
} catch {}
try{
  document.querySelector('.soils_btn').addEventListener('click', () => {
    remove_existing_buttons();
    document.querySelector('.info_cont > .column_start > iframe').style.display = "flex";
    currently_selected.classList.remove('selected_menu');
    document.querySelector('.soils_btn').classList.add('selected_menu');
    currently_selected = document.querySelector('.soils_btn');
    document.querySelector('.info_cont > .column_start > iframe').src = design_obj.soils.iframe_src;
    document.querySelector('.info_cont > p').innerHTML = design_obj.soils.swappable;
    page_title.innerHTML = design_obj.soils.title;

    var new_btn = document.createElement('a');
    new_btn.innerHTML = design_obj.soils.button_title;
    new_btn.setAttribute('href', design_obj.soils.button_href);

    document.querySelector('.column_start').appendChild(new_btn);
});
} catch {}
try{
  document.querySelector('.sizing_btn').addEventListener('click', () => {
    remove_existing_buttons();
    currently_selected.classList.remove('selected_menu');
    document.querySelector('.sizing_btn').classList.add('selected_menu');
    currently_selected = document.querySelector('.sizing_btn');

    document.querySelector('.info_cont > .column_start > iframe').style.display = "none";
    document.querySelector('.info_cont > p').innerHTML = design_obj.sizing.swappable;
    page_title.innerHTML = design_obj.sizing.title;

    var new_btn = document.createElement('a');
    var new_btn_2 = document.createElement('a');
    new_btn.innerHTML = "View Sizing Map";
    new_btn.setAttribute('href', 'pages/sizing_map.html');
    new_btn_2.innerHTML = "Use Sizing Calculator";
    new_btn_2.setAttribute('href', 'pages/sizing_calculator.html');

    document.querySelector('.column_start').appendChild(new_btn);
    document.querySelector('.column_start').appendChild(new_btn_2);
});
} catch {}
try{
  document.querySelector('.cbyd_btn').addEventListener('click', () => {
    remove_existing_buttons();
    currently_selected.classList.remove('selected_menu');
    document.querySelector('.cbyd_btn').classList.add('selected_menu');
    currently_selected = document.querySelector('.cbyd_btn');

    document.querySelector('.info_cont > .column_start > iframe').style.display = "none";
    document.querySelector('.info_cont > p').innerHTML = design_obj.cbyd.swappable;
    page_title.innerHTML = design_obj.cbyd.title;

    var new_btn = document.createElement('a');
    new_btn.innerHTML = design_obj.cbyd.button_title;
    new_btn.setAttribute('href', design_obj.cbyd.button_href);

    document.querySelector('.column_start').appendChild(new_btn);
});
} catch {}

//** These try/catch blocks are for handling the install content-switching cases **//
try{
  document.querySelector('.excavate_btn').addEventListener('click', () => {
    currently_selected.classList.remove('selected_menu');
    document.querySelector('.excavate_btn').classList.add('selected_menu');
    currently_selected = document.querySelector('.excavate_btn');
    document.querySelector('.info_cont > iframe').src = install_obj.excavate.iframe_src;
    document.querySelector('.info_cont > p').innerHTML = install_obj.excavate.swappable;
    page_title.innerHTML = install_obj.excavate.title;
});
} catch {}
try{
  document.querySelector('.layout_btn').addEventListener('click', () => {
    console.log(install_obj.layout.iframe_src);
    currently_selected.classList.remove('selected_menu');
    document.querySelector('.layout_btn').classList.add('selected_menu');
    currently_selected = document.querySelector('.layout_btn');
    document.querySelector('.info_cont > iframe').src = install_obj.layout.iframe_src;
    document.querySelector('.info_cont > p').innerHTML = install_obj.layout.swappable;
    page_title.innerHTML = install_obj.layout.title;
});
} catch {}
try{
  document.querySelector('.planting_btn').addEventListener('click', () => {
    currently_selected.classList.remove('selected_menu');
    document.querySelector('.planting_btn').classList.add('selected_menu');
    currently_selected = document.querySelector('.planting_btn');
    document.querySelector('.info_cont > iframe').src = install_obj.planting.iframe_src;
    document.querySelector('.info_cont > p').innerHTML = install_obj.planting.swappable;
    page_title.innerHTML = install_obj.planting.title;
});
} catch {}
try{
  document.querySelector('.maintain_btn').addEventListener('click', () => {
    currently_selected.classList.remove('selected_menu');
    document.querySelector('.maintain_btn').classList.add('selected_menu');
    currently_selected = document.querySelector('.maintain_btn');
    document.querySelector('.info_cont > iframe').src = install_obj.maintain.iframe_src;
    document.querySelector('.info_cont > p').innerHTML = install_obj.maintain.swappable;
    page_title.innerHTML = install_obj.maintain.title;
});
} catch {}
