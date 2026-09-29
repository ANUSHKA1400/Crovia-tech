function Stats(){

const stats=[
["200+","Projects"],
["KG to Higher","Education Programs"],
["Industry Experts","Real Engineer Mentors"],
["7+","Technologies"]
]

return(

<section className="py-5">

<div className="container">

<div className="row text-center">

{stats.map((item,index)=>(

<div className="col-md-3" key={index}>

<div className="counter">

<h2>{item[0]}</h2>

<p>{item[1]}</p>

</div>

</div>

))}

</div>

</div>

</section>

)

}

export default Stats;