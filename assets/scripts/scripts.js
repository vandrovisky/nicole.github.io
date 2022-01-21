function Banners(){
  
   var MNews = new Array(); 
       MNews[0]= '<img src="assets/img/image1.jpg">'
       MNews[1]= '<img src="assets/img/image2.jpg">'
       MNews[2]= '<img src="assets/img/image3.jpg">'
       MNews[3]= '<img src="assets/img/image4.jpg">'
       MNews[4]= '<img src="assets/img/image5.jpg">'
       MNews[5]= '<img src="assets/img/image6.jpg">'
       MNews[6]= '<img src="assets/img/image7.jpg">'
       MNews[7]= '<img src="assets/img/image8.jpg">'
       MNews[8]= '<img src="assets/img/image9.jpg">'
       MNews[9]= '<img src="assets/img/image10.jpg">'
       MNews[10]= '<img src="assets/img/image11.jpg">'
       MNews[11]= '<img src="assets/img/image12.jpg">'
       MNews[12]= '<img src="assets/img/image13.jpg">'
       
       
   var Numero = Math.floor(Math.random()*13);
   document.write(MNews[Numero]);

}


