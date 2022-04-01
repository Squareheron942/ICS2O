var bMonth = prompt("What month were you born?");
var bDay = Number(prompt("What day were you born?"));

if (bMonth == "January") {
  if (bDay < 20) {
    document.write("You are a Capricorn!");
    document.write("<br><img src='https://rlv.zcache.com/horoscope_sign_capricorn_zodiac_traits_birthday_mouse_pad-r753b7fcb8f8745ee8c90ee9b83366d24_x74vi_8byvr_704.webp'>");
  } else {
    document.write("You are an Aquarius!");
    document.write("<br><img src='https://images-na.ssl-images-amazon.com/images/I/61gvzYOU1iL.jpg'>");
  }
} else if (bMonth == "February") {
  if (bDay < 19) {
    document.write("You are an Aquarius!");
    document.write("<br><img src='https://images-na.ssl-images-amazon.com/images/I/61gvzYOU1iL.jpg'>");
  } else {
    document.write("You are a Pisces!");
    document.write("<br><img src='https://images-na.ssl-images-amazon.com/images/I/6121HTbnivL.jpg'>");
  }
} else if (bMonth == "March") {
  if (bDay < 21) {
    document.write("You are a Pisces!");
    document.write("<br><img src='https://images-na.ssl-images-amazon.com/images/I/6121HTbnivL.jpg'>");
  } else {
    document.write("You are an Aries!");
    document.write("<br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-N1snibe54lOXWj-Q5gcbJgBPXpAohE9hg&usqp=CAU'>");
  }
} else if (bMonth == "April") {
  if (bDay < 20) {
    document.write("You are an Aries!");
    document.write("<br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-N1snibe54lOXWj-Q5gcbJgBPXpAohE9hg&usqp=CAU'>");
  } else {
    document.write("You are a Taurus!");
    document.write("<br><img src='https://www.dictionary.com/e/wp-content/uploads/2021/04/20210412_taurus__1000x700.png'>");
  }
} else if (bMonth == "May") {
  if (bDay < 21) {
    document.write("You are a Taurus!");
    document.write("<br><img src='https://www.dictionary.com/e/wp-content/uploads/2021/04/20210412_taurus__1000x700.png'>");
  } else {
    document.write("You are a Gemini!");
    document.write("<br><img src='https://images-na.ssl-images-amazon.com/images/I/61T6KK6BFoL.jpg'>");
  }
} else if (bMonth == "June") {
  if (bDay < 22) {
    document.write("You are a Gemini!");
    document.write("<br><img src='https://images-na.ssl-images-amazon.com/images/I/61T6KK6BFoL.jpg'>");
  } else {
    document.write("You are a Cancer!");
    document.write("<br><img src='https://opinionstage-res.cloudinary.com/image/upload/c_lfill,dpr_3.0,f_auto,fl_lossy,q_auto:good,w_500/v1/polls/hpergprnba97yadcz6j9'>");
  }
} else if (bMonth == "July") {
  if (bDay < 23) {
    document.write("You are a Cancer!");
    document.write("<br><img src='https://opinionstage-res.cloudinary.com/image/upload/c_lfill,dpr_3.0,f_auto,fl_lossy,q_auto:good,w_500/v1/polls/hpergprnba97yadcz6j9'>");
  } else {
    document.write("You are a Leo!");
    document.write("<br><img src='https://www.dictionary.com/e/wp-content/uploads/2021/07/20210719_leo__1000x700.png'>");
  }
} else if (bMonth == "August") {
  if (bDay < 23) {
    document.write("You are a Leo!");
    document.write("<br><img src='https://www.dictionary.com/e/wp-content/uploads/2021/07/20210719_leo__1000x700.png'>");
  } else {
    document.write("You are a Virgo!");
    document.write("<br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfw_hFHpOw0mQR1fIUFqkoXOnzEeh0_haP7w&usqp=CAU'>");
  }
} else if (bMonth == "September") {
  if (bDay < 23) {
    document.write("You are a Virgo!");
    document.write("<br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfw_hFHpOw0mQR1fIUFqkoXOnzEeh0_haP7w&usqp=CAU'>");
  } else {
    document.write("You are a Libra!");
    document.write("<br><img src='https://images-na.ssl-images-amazon.com/images/I/61NW5j6JojL.jpg'>");
  }
} else if (bMonth == "October") {
  if (bDay < 24) {
    document.write("You are a Libra!");
    document.write("<br><img src='https://images-na.ssl-images-amazon.com/images/I/61NW5j6JojL.jpg'>");
  } else {
    document.write("You are a Scorpius!");
    document.write("<br><img src='data:image/jpeg;base64,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'>");
  }
} else if (bMonth == "November") {
  if (bDay < 22) {
    document.write("You are a Scorpius!");
    document.write("<br><img src='data:image/jpeg;base64,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'>");
  } else {
    document.write("You are a Sagittarius!");
    document.write("<br><img src='https://www.dictionary.com/e/wp-content/uploads/2021/11/20211115_sagittarius__1000x700.png'>");
  }
} else if (bMonth == "December") {
  if (bDay < 22) {
    document.write("You are a Sagittarius!");
    document.write("<br><img src='https://www.dictionary.com/e/wp-content/uploads/2021/11/20211115_sagittarius__1000x700.png'>");
  } else {
    document.write("You are a Capricorn!");
    document.write("<br><img src='https://rlv.zcache.com/horoscope_sign_capricorn_zodiac_traits_birthday_mouse_pad-r753b7fcb8f8745ee8c90ee9b83366d24_x74vi_8byvr_704.webp'>");
  }
} 