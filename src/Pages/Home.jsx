//   import React, { useState, useRef } from 'react';
import React, { useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Lottie from 'react-lottie';
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
import BasicExample from '../Components/Table'
import library_lottie from '../Assets/lottie-lib.json'
// export const Bookdata = createContext();
const Home = () => {
    //  let bookname = useRef("");
    if(JSON.parse(localStorage.getItem('data'))==null ) {
         //check if data exists
        console.log('kuch nahi')
        localStorage.setItem('data', JSON.stringify([]))
    } else {
         //if not put atleast [] empty array
         console.log('kuch hain');
    }
    //const bookname = useRef("");
     //const author = useRef("");
     //let type = useRef("Coding");

    // const [bookname,setBookname] = useState("");
    // const [author, setAuthor]=useState("");
    // const [type, settype]=useState("coding");
     const bookname = useRef("");
    const author = useRef("");
    const coding = useRef("Coding");
    const cooking = useRef("Cooking");
    const adventure = useRef("Adventure");
    const [bookdata, setBookdata] = useState(JSON.parse(localStorage.getItem('data'))); //adding data from localstorage here
    let type = ""


    console.log('problem 1')



    const [data, setData] = useState({});


    // localStorage.setItem("data", JSON.stringify([{ name: "saikat" }, { name: "karan" }]));
    // // Object -- > JSON
    // console.log(JSON.parse(localStorage.getItem("data")))
    // // JSON -->Object


    // const [bookname,setBookname] = useState("");
    // const [author, setAuthor]=useState("");
    // const [type, settype]=useState("coding");

    const formsubmit = (e) => {

        if (cooking.current.checked) {
            type = "Cooking"
        }
        else if (coding.current.checked) {
            type = "Coding"
        }
        else {
            type = "Adventure"
        }

        e.preventDefault();
        
        if (bookname.current.value.length > 2 && author.current.value.length > 2) {
            // setData({
            //     bookname: bookname.current.value,
            //     author: author.current.value,
            //     type: type
            // })
    // localStorage.setItem("data", JSON.stringify([...(JSON.parse(localStorage.getItem("data"))), { data }]))
            setBookdata([...bookdata, {
                bookname: bookname.current.value,
                author: author.current.value,
                type: type
            }])
            localStorage.setItem('data', JSON.stringify([...JSON.parse(localStorage.getItem('data')), {
                bookname: bookname.current.value,
                author: author.current.value,
                type: type
            } ]))
        }
        else {
            console.log('enter values')
        }
        e.target.reset();
    }
    //const databook = JSON.parse(localStorage.getItem("data"));


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: library_lottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <>
            {/* <Bookdata.Provider value={data}> */}
                <div className='container'>
                    <h2 className='text-center text-secondary'> PrepBytes Library </h2>
                    <hr />

                    <div className='w-100 formshere '>
                        <Form className='w-50' onSubmit={(e) => { formsubmit(e) }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book name</Form.Label>
                                <Form.Control type="type" placeholder="Harry potter" ref={bookname} />
                                <Form.Text className="text-muted">
                                    We'll never share your book with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" placeholder="J. K. Rowling" ref={author} />
                            </Form.Group>

                            {/* <ButtonGroup aria-label="Basic example">
                            <Button variant="dark" ref={type} >Coding</Button>
                            <Button variant="dark" ref={type}>Cooking</Button>
                            <Button variant="dark" ref={type}>Adventure</Button>
                        </ButtonGroup> */}
                            <div className="btn-group">
                                <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" ref={cooking} />
                                <label className="btn btn-secondary" htmlFor="option1">Cooking</label>

                                <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" ref={coding} />
                                <label className="btn btn-secondary" htmlFor="option2">Coding</label>

                                <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" ref={adventure} />
                                <label className="btn btn-secondary" htmlFor="option3">Adventure</label>
                            </div>

                            <br />
                            <br />
                            <Button variant="warning" type="submit">
                                Submit
                            </Button>
                            <br /><br />
                        </Form>
                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>


                     
                {/* <BasicExample data={databook}/>  */}
                    <BasicExample data={bookdata}/>

                </div>


            {/* </Bookdata.Provider> */}
        </>
    )
}
export default Home;