import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateProperty = () => {

  const id = useParams().id
  
    const{register,handleSubmit}=useForm({
      defaultValues:async()=>{
        const res = await axios.get("/property/getproperty/"+id);
        return res.data.data;
    }
});


    const [states, setstates] = useState([]);
    const [cities, setcities] = useState([]);
    const [areas, setareas] = useState([]);
    const [category,setCategory]=useState([]);
    const navigate=useNavigate();

    const getAllStates=async()=>{

        const res=await axios.get("/state/allstate");
        // console.log(res.data);
        setstates(res.data.data);
    };

    const getCityByState=async(id)=>{

        const res =await axios.get("/city/getcitybystate/" + id);
        console.log("city response....",res.data);
        setcities(res.data.data);
    };

    const getAreaByCity =async(id)=>{

        const res=await axios.get("/area/getareabycity/" + id);
        console.log(res.data);
        setareas(res.data.data);

    };

    const getAllCategory=async()=>{

      const res= await axios.get("/category/allcat/")
      console.log("cataegory Feched",res.data);
      setCategory(res.data.data);

    };

  

    useEffect(()=>{
        getAllStates()
        getAllCategory()
    },[])

    const submintHandler=async(data)=>{

        const userId=localStorage.getItem("id");

        delete data._id;
        console.log(data);
        const res=await axios.put("/property/updateproperty/"+id,data);
        console.log(res.data);
        navigate("/admin/viewproperty")

    }
  return (
    <div >
    <form onSubmit={handleSubmit(submintHandler)} >

    <div id="fh5co-search-map">
      <div className="search-property">
        <div className="s-holder">
          <h2 style={{border:"2px solid #333", borderRadius: "3px", height:"50px",padding:"10px"}}>PROPERTY</h2>
          <div className="row">

            <div className="col-xxs-12 col-xs-12">
              <section>
                {/* <label htmlFor="class">State:</label> */}
                <select 
                className='dropdown-select'
                {...register("stateId")}
                onChange={(event)=>{getCityByState(event.target.value);}}
             
                >
                  <option>SELECT STATE</option>
                    {
                        states?.map((state)=>{
                        return <option key={state._id} value={state._id}>{state.name}</option>
                        })
                    }

                </select>
              </section>
            </div>

            <div className="col-xxs-12 col-xs-12">
              <section>
                {/* <label htmlFor="class">State:</label> */}
                <select 
              className='dropdown-select'
                {...register("cityId")}
                      onChange={(event)=>{getAreaByCity(event.target.value); }}

             
                >
                   <option>SELECT CITY</option>
                    {
                      cities?.map((city)=>{
                      return <option key={city._id} value={city._id}>{city.name}</option>})
                    }

                </select>
              </section>
            </div>

            <div className="col-xxs-12 col-xs-12">
              <section>
                {/* <label htmlFor="class">State:</label> */}
                <select 
                className='dropdown-select'
                {...register("areaId")}


             
                >
                   <option>SELECT AREA</option>
                    {
                    areas?.map((area)=>{
                        return <option key={area._id} value={area._id}>{area.name}</option>
                    })
                    }
                 </select>
              </section>
            </div>
            <div className="col-xxs-12 col-xs-12">
              <section>
                {/* <label htmlFor="class">Property Type:</label> */}
                <select 
                className='dropdown-select'
                onChange={(event)=>{getAllCategory(event.target.value)}}
                {...register("categoryId")}>
                 <option>SELECT CATEGORY</option>
                  {
                    category?.map((category)=>{
                      return <option key={category._id} value={category._id}>{category.name}</option>
                    })

                  }

                </select>
              </section>
            </div>
            <div className="col-xxs-12 col-xs-12">
              <div className="input-field">
                {/* <label htmlFor="from"></label> */}
                <input
                  type="text"
                  className="form-control"
                  // id="from-place"
                  placeholder="Property_Name"
                  {...register("property_name")}
                />
              </div>
            </div>

            <div className="col-xxs-12 col-xs-12">
              <div className="input-field">
                {/* <label htmlFor="from">Image</label> */}
                <input
                  type="file"
                  placeholder='Choose Image'
                  className="form-control"
                  id="from-place"
                  {...register("image")} />
              </div>
            </div>

        <div className="col-xxs-12 col-xs-12">
              <div className="input-field">
                {/* <label htmlFor="from">Image</label> */}
                <input
                  type="text"
                  placeholder='Address'
                  className="form-control"
                  id="from-place"
                  {...register("address")}
                 />
              </div>
            </div>
            <div className="col-xxs-12 col-xs-12">
              <div className="input-field">
                {/* <label htmlFor="from">Image</label> */}
                <input
                  type="text"
                  placeholder='Zipcode'
                  className="form-control"
                  id="from-place"
                  {...register("zipcode")}
                  />
              </div>
            </div>

            <div className="col-xxs-12 col-xs-12">
              <div className="input-field">
                {/* <label htmlFor="from">Image</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder='Description'
                  id="from-place"
                  {...register("description")}

                  />
              </div>
            </div>

            <div className="col-xxs-12 col-xs-12">
              <div className="input-field">
                {/* <label htmlFor="from">Image</label> */}
                <input
                  type="number"
                  className="form-control"
                  id="from-place"
                  placeholder='BasePrice'
                  {...register("basePrice")}

                  />
              </div>
            </div>

            <div className="col-xxs-12 col-xs-12">
              <div className="input-field">
                {/* <label htmlFor="from">Image</label> */}
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  id="from-place"
                  placeholder='No. of Rooms'
                  {...register("rooms")}

                  />
              </div>
            </div>

            <div className="col-xxs-12 col-xs-12">
              <div className="input-field">
                {/* <label htmlFor="from">Image</label> */}
                <input
                  type="number"
                  className="form-control"
                  id="from-place"
                  min="0"
                  placeholder='No. of Bathrooms'
                  {...register("bathrooms")}

                  />
              </div>
            </div>
            <div className="col-xxs-12 col-xs-12">
              <section>
                {/* <label htmlFor="class">State:</label> */}
                <select 
                className='dropdown-select'
                {...register("furnishingStatus")}
                >
                 <option>Furnished</option>
                  <option>Semi-Furnished</option>
                  <option>UnFurnished</option>

                </select>
              </section>
            </div>

            <div className="col-xxs-12 col-xs-12">
              <section>
                {/* <label htmlFor="class">State:</label> */}
                <select 
              className='dropdown-select'
                {...register("status")}
                >
                <option>Available</option>
                <option>Sold</option>
                <option>Rented</option>


                </select>
              </section>
            </div>
            
           
            
            <div >
              <p>
                {/* <a className="btn btn-primary btn-lg" href="#">
                  Login
                </a> */}
                <button type='submit' className="btn btn-lg" ><b>UPDATE</b></button>
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div id='fh5co-search-map' className='map'></div>
      </div>
      

</form>


</div>
  )
}
