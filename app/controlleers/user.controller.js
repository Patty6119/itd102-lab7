exports.home = (red, res) => { //ในวงเล็บเรียกว่าพารามิเตอร์
    res.send("Home");
} ;

exports.about = (red, res) => { 
    res.send("About");
} ;

exports.contact = (red, res) => { 
    res.send("Contact");
} ;


//ฟังคั่นธรรมดา
//function abc (p1,p2){ //parameter พารามิเตอร์
  //  const a = p1+p2;
    //return a;
//}
//abc(1,2) //argument อากิเมนส์