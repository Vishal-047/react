import { useState, useCallback, useEffect,useRef } from 'react'


function App() {
  const [length, setlength] = useState(0);
  const [num, setnum]=useState(false);
  const [char, setchar]=useState(false);
  const [pass, setpass]=useState("");

  const passref=useRef(null);
  const passgen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+="0123456789";
    if(char) str+="!@#$%^&*()[]{}\/.,<>~`|";
for (let i = 0; i < length; i++) {
      let randIndex = Math.floor(Math.random() * str.length+1 );
      pass += str.charAt(randIndex);
    }
    setpass(pass)

  }, [length, num,char,setpass]);

  const copypasswordtoclipboard=useCallback(()=>{
    passref.current?.select();
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(()=>{passgen()},[length,char,num,passgen])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center p-3'>Password Generator</h1>
      <div className='flex shadow rounded-mg overflow-hidden mb-3'>
        <input type="text" value={pass} className="outline-none w-full py-1, px-3 my-4 bg-white rounded-2xl" placeholder='Password'readOnly ref={passref}></input>
        <button onClick={copypasswordtoclipboard} className='bg-red-50 rounded-2xl outline-none px-3 py-0.5 shrink-0 cursor-pointer'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked={num}
              id='numberInput'
              onChange={() => setnum((prev)=>!prev)}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked={char}
              id='charInput'
              onChange={() => setchar((prev)=>!prev)}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
        </div>
    </>
  )
}

export default App
