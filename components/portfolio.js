import { useState } from 'react';
import { FiDownload, FiMail, FiPhoneCall, FiSend } from 'react-icons/fi';
import  { FaGithub, FaGraduationCap, FaLinkedin, FaBars } from 'react-icons/fa';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';

export default function Portfolio() {

  const [visPro1, setVisPro1] = useState(false); 
  const [visPro2, setVisPro2] = useState(false); 
  const [visPro3, setVisPro3] = useState(false); 
  const [visPro4, setVisPro4] = useState(false);

  const [toggle, setTogle] = useState(true);

  function scrollDown(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <div className="bg-navblue h-full w-full font-serif">

        <div className="w-full md:flex md:px-44 py-3 md:justify-between fixed top-0 bg-navblue border-b md:border-b shadow-2xl shadow-pink-800">
          <div className="flex justify-between px-2">
            <button onClick={()=>scrollDown("personal")}><p className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Pankaj</p></button>
            <div className="flex space-x-2">
              <button onClick={()=>scrollDown("contact")} className="md:hidden flex text-white font-bold px-3 rounded-md bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400"><FiPhoneCall className="mt-2.5" /></button>
              <button className="md:hidden" onClick={()=>setTogle(!toggle)}><FaBars className="text-white text-2xl"/></button>
            </div>
          </div>
          <div className={(toggle ? "hidden md:block " : "mt-3 md:mt-0 ")+"md:bg-transparent"}>
            <ul className="flex flex-col md:flex-row md:space-x-6 mt-1.5">
              <button onClick={()=>{scrollDown("about"), setTogle(!toggle)}}><li className="text-white flex justify-start mx-1 md:mx-0 border-t border-gray-400 md:border-t-0 py-2 md:py-0 hover:bg-pink-400 md:rounded-md px-2">About</li></button>
              <button onClick={()=>{scrollDown("skills"), setTogle(!toggle)}}><li className="text-white flex justify-start mx-1 md:mx-0 border-t border-gray-400 md:border-t-0 py-2 md:py-0 hover:bg-pink-400 md:rounded-md px-2">Skills</li></button>
              <button onClick={()=>{scrollDown("education"), setTogle(!toggle)}}><li className="text-white flex justify-start mx-1 md:mx-0 border-t border-gray-400 md:border-t-0 py-2 md:py-0 hover:bg-pink-400 md:rounded-md px-2">Education</li></button>
              <button onClick={()=>{scrollDown("projects"), setTogle(!toggle)}}><li className="text-white flex justify-start mx-1 md:mx-0 border-t border-gray-400 md:border-t-0 py-2 md:py-0 hover:bg-pink-400 md:rounded-md px-2">Projects</li></button>
              <button onClick={()=>{scrollDown("experience"), setTogle(!toggle)}}><li className="text-white flex justify-start mx-1 md:mx-0 border-t border-gray-400 md:border-t-0 py-2 md:py-0 hover:bg-pink-400 md:rounded-md px-2">Experience</li></button>
              <button onClick={()=>{scrollDown("opensource"), setTogle(!toggle)}}><li className="text-white flex justify-start mx-1 md:mx-0 border-t border-gray-400 md:border-t-0 py-2 md:py-0 hover:bg-pink-400 md:rounded-md px-2">Open Source</li></button>
            </ul>
          </div>
          <div className={(toggle ? "hidden md:block " : "hidden md:block ")+""}>
            <button onClick={()=>scrollDown("contact")} className="flex text-white font-bold px-3 py-2 rounded-md bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400"><FiPhoneCall className="mt-0.5 mr-2" />Contact Me</button>
          </div>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12 pt-16 md:pt-40" id="personal">
          <div className="flex w-full md:w-1/2 justify-start">
            <div className="space-y-2 mt-12">
              <p className="text-gray-300">WELCOME TO MY WORLD</p>
              <p className="text-white font-bold text-6xl">Hi, I'm Pankaj</p>
              <p className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Full-Stack Software Developer</p>
              <p className="text-gray-300 text-lg">I'm the software developer at Asthara Agro in India</p>
              <p className="text-gray-300 text-lg">Visit my profile and Stay connected with me</p>
              <div className="flex justify-between">
                <button className="flex justify-center w-5/12 text-white font-bold px-1 md:px-4 py-2 mt-4 md:mt-8 rounded-md bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400"><FiDownload className="mt-0.5 mr-2" />My Resume</button>
                <button className="flex justify-center w-5/12 text-white font-bold px-1 md:px-4 py-2 mt-4 md:mt-8 rounded-md bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 md:mr-3"><FiMail className="mt-0.5 mr-2" />Hire Me</button>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 justify-end">
            <img src="./home.png" alt="home" className="w-9/12" />
          </div>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12 pt-24 md:pt-40" id="about">
          <div className="flex w-full md:w-1/2 justify-start">
            <img src="./about6.png" alt="home" className="w-10/12" />
          </div>
          <div className="flex w-full md:w-1/2 justify-end">
            <div className="mt-12 w-10/12">
              <div className="flex space-x-3">
                <p className="text-white font-bold text-4xl">About</p>
                <p className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Me</p>
              </div>
              <p className="text-gray-300 text-lg mt-4">My Full Name is Pankaj Kumar Bijarniya. I have completed my graduation from IIIT Senapati, Manipur and enthusiast to explore new Technologies.</p>
              <p className="text-gray-300 text-lg mt-2">I've worked on Full-Stack web and app development for a few months during Internships while studying at college. Have my own projects, coded mostly in React, React-Native, Express.js, Node.js, and MongoDB.</p>
              <div className="flex justify-between">
                <button className="flex justify-center w-5/12 text-white font-bold px-4 py-2 mt-8 rounded-md bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400"><FaLinkedin className="mt-0.5 mr-1" />Linkedin</button>
                <button className="flex justify-center w-5/12 text-white font-bold px-4 py-2 mt-8 rounded-md bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400"><FaGithub className="mt-0.5 mr-1" />Github</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3 pt-24 md:pt-40" id="education">
          <p className="text-white font-bold text-4xl">My</p>
          <p className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Education</p>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12 justify-center">
          <ol className="items-center sm:flex w-full">
            <li className="mb-6 sm:mb-0 md:w-1/3">
              <div className="flex items-center">
                <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                <div className="flex justify-center items-center w-6 h-6 bg-white rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                  <FaGraduationCap className="text-orange-400" />
                </div>
                <div className="hidden sm:flex w-full bg-white h-0.5"></div>
              </div>
              <div className="mt-3 bg-white rounded-md p-4 shadow-lg shadow-pink-800 mx-4">
                <div className="w-full flex justify-center">
                  <img src="iiitm.png" alt="logo" width="177" />
                </div>
                <h3 className="text-lg font-bold text-navblue flex justify-center">Bachelor of Technology</h3>
                <h3 className="text-sm font-semibold text-gray-600 flex justify-center">IIIT Senapati, Manipur</h3>
                <p className="text-base font-normal text-gray-600 flex justify-center">Computer Science and Engineering.</p>
                <div className="flex justify-between mt-1">
                  <p className="mb-2 text-sm font-bold leading-none text-gray-800 flex justify-center">Aug 2018 - May 2022</p>
                  <p className="mb-2 text-sm font-bold leading-none text-gray-800 flex justify-center">CGPA: 8.2/10</p>
                </div>
                <button className="text-white w-full bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">See My Result</button>
              </div>
            </li>
            <li className="mb-6 sm:mb-0 md:w-1/3">
            <div className="flex items-center">
              <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                <div className="flex justify-center items-center w-6 h-6 bg-white rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                  <FaGraduationCap className="text-orange-400" />
                </div>
                <div className="hidden sm:flex w-full bg-white h-0.5"></div>
              </div>
              <div className="mt-3 bg-white rounded-md p-4 shadow-lg shadow-pink-800 mx-4">
                <div className="w-full flex justify-center">
                  <img src="bser.png" alt="logo" width="150" />
                </div>
                <h3 className="text-lg font-bold text-navblue flex justify-center">Senior Secondary</h3>
                <h3 className="text-sm font-semibold text-gray-600 flex justify-center">Board of Secondary Education Rajasthan</h3>
                <p className="text-base font-normal text-gray-600 flex justify-center">12th Class(PhySics, Chemistry, Math)</p>
                <div className="flex justify-between mt-1">
                  <p className="mb-2 text-sm font-bold leading-none text-gray-800 flex justify-center">Jul 2016 - May 2017</p>
                  <p className="mb-2 text-sm font-bold leading-none text-gray-800 flex justify-center">Percentage: 78.60%</p>
                </div>
                <button className="text-white w-full bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">See My Result</button>
              </div>
            </li>
            <li className="mb-6 sm:mb-0 md:w-1/3">
              <div className="flex items-center">
                <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                <div className="flex justify-center items-center w-6 h-6 bg-white rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                  <FaGraduationCap className="text-orange-400" />
                </div>
                <div className="hidden sm:flex w-full bg-white h-0.5"></div>
              </div>
              <div className="mt-3 bg-white rounded-md p-4 shadow-lg shadow-pink-800 mx-4">
                <div className="w-full flex justify-center">
                  <img src="bser.png" alt="logo" width="150" />
                </div>
                <h3 className="text-lg font-bold text-navblue flex justify-center">Secondary</h3>
                <h3 className="text-sm font-semibold text-gray-600 flex justify-center">Board of Secondary Education Rajasthan</h3>
                <p className="text-base font-normal text-gray-600 flex justify-center">10th Class(All Typical Subjects)</p>
                <div className="flex justify-between mt-1">
                  <p className="mb-2 text-sm font-bold leading-none text-gray-800 flex justify-center">Jul 2014 - May 2015</p>
                  <p className="mb-2 text-sm font-bold leading-none text-gray-800 flex justify-center">Percentage: 75.67%</p>
                </div>
                <button className="text-white w-full bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">See My Result</button>
              </div>
            </li>
          </ol>
        </div>

        <div className="flex justify-center space-x-3 pt-24 md:pt-40" id="skills">
          <p className="text-white font-bold text-4xl">My</p>
          <p className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Skills</p>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12 justify-center">
          <div className="flex-col">
            <div className="md:flex">
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/cpp.png" alt="skill" className="w-8" />&nbsp;C/C++</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/java.png" alt="skill" className="w-7" />Java</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/javascript.png" alt="skill" className="w-8" />&nbsp;Javascript</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/python.png" alt="skill" className="w-8 mt-1" />&nbsp;Python</button>
            </div>
            <div className="md:flex mt-4">
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/html5.png" alt="skill" className="w-8" />&nbsp;HTML</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/css3.png" alt="skill" className="w-8" />&nbsp;CSS</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/react.png" alt="skill" className="w-8 mt-0.5" />&nbsp;React</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/react.png" alt="skill" className="w-8 mt-0.5" />&nbsp;React-Native</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/next.png" alt="skill" className="w-8 mt-0.5" />&nbsp;Next.js</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/bootstrap.png" alt="skill" className="w-8 mt-1" />&nbsp;Bootstrap</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/tailwind.png" alt="skill" className="w-8 mt-1.5" />&nbsp;TailwindCSS</button>
            </div>
            <div className="md:flex mt-4">
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/node.png" alt="skill" className="w-8" />&nbsp;Node.js</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/express.png" alt="skill" className="w-10 mt-1.5" />Express.js</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/php.png" alt="skill" className="w-8 mt-1.5" />&nbsp;PHP</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/mongodb.png" alt="skill" className="w-8 mt-1.5" />&nbsp;MongoDB</button>
              <button className="text-white text-2xl mx-2 flex justify-center border rounded-md px-2 py-1"><img src="./images/mysql.png" alt="skill" className="w-8" />&nbsp;MySQL</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3 pt-24 md:pt-40" id="experience">
          <p className="text-white font-bold text-4xl">Job</p>
          <p className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Experience</p>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12 justify-center">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden h-full">
              
              <div className="border-2-2 absolute border-gray-100 h-full border left-2/4"></div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-navblue">1</h1>
                </div>
                <div className="order-1 rounded-lg shadow-xl shadow-pink-800 w-5/12">
                  <div className="bg-white rounded-md p-4">
                    <div className="w-full flex justify-center">
                      <img src="transposeon.png" alt="logo" width="177" />
                    </div>
                    <h3 className="text-lg font-bold text-navblue flex justify-center">TransposeOn Private Limited</h3>
                    <h3 className="text-sm font-semibold text-gray-500 flex justify-center">Full-Stack Software Developer</h3>
                    <div className="flex justify-between mt-1">
                      <p className="mb-2 text-sm font-normal leading-none text-gray-600 flex justify-center">May 2022 - Present</p>
                      <p className="mb-2 text-sm font-normal leading-none text-gray-600 flex justify-center">Type: Full-Time</p>
                    </div>
                    <button className="text-white w-full bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">See My Result</button>
                  </div>
                </div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-navblue font-semibold text-lg">2</h1>
                </div>
                <div className="order-1 rounded-lg shadow-xl shadow-pink-800 w-5/12">
                  <div className="bg-white rounded-md p-4">
                    <div className="w-full flex justify-center">
                      <img src="asthara.png" alt="logo" width="177" />
                    </div>
                    <h3 className="text-lg font-bold text-navblue flex justify-center">Asthara Agro Private Limited</h3>
                    <h3 className="text-sm font-semibold text-gray-500 flex justify-center">Full-Stack Software Developer</h3>
                    <div className="flex justify-between mt-1">
                      <p className="mb-2 text-sm font-normal leading-none text-gray-600 flex justify-center">Oct 2021 - Apr 2022</p>
                      <p className="mb-2 text-sm font-normal leading-none text-gray-600 flex justify-center">Type: Internship</p>
                    </div>
                    <button className="text-white w-full bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">See My Result</button>
                  </div>
                </div>
              </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-navblue">3</h1>
                </div>
                <div className="order-1 rounded-lg shadow-xl shadow-pink-800 w-5/12">
                  <div className="bg-white rounded-md p-4">
                    <div className="w-full flex justify-center">
                      <img src="virtusa.jpeg" alt="logo" width="177" />
                    </div>
                    <h3 className="text-lg font-bold text-navblue flex justify-center">Virtusa Private Limited</h3>
                    <h3 className="text-sm font-semibold text-gray-500 flex justify-center">Software Engineer</h3>
                    <div className="flex justify-between mt-1">
                      <p className="mb-2 text-sm font-normal leading-none text-gray-600 flex justify-center">Dec 2021 - Mar 2022</p>
                      <p className="mb-2 text-sm font-normal leading-none text-gray-600 flex justify-center">Type: Internship</p>
                    </div>
                    <button className="text-white w-full bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">See My Result</button>
                  </div>
                </div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-navblue font-semibold text-lg">4</h1>
                </div>
                <div className="order-1 rounded-lg shadow-xl shadow-pink-800 w-5/12">
                  <div className="bg-white rounded-md p-4">
                    <div className="w-full flex justify-center">
                      <img src="analysed.jpeg" alt="logo" width="177" />
                    </div>
                    <h3 className="text-lg font-bold text-navblue flex justify-center">Analysed.in</h3>
                    <h3 className="text-sm font-semibold text-gray-500 flex justify-center">Web Developer</h3>
                    <div className="flex justify-between mt-1">
                      <p className="mb-2 text-sm font-normal leading-none text-gray-600 flex justify-center">Mar 2020 - May 2020</p>
                      <p className="mb-2 text-sm font-normal leading-none text-gray-600 flex justify-center">Type: Internship</p>
                    </div>
                    <button className="text-white w-full bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">See My Result</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3 pt-24 md:pt-40" id="projects">
          <p className="text-white font-bold text-4xl">My</p>
          <p className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Projects</p>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12 justify-center">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden h-full">
              
              <div className="border-2-2 absolute border-gray-100 h-full border left-2/4"></div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-navblue">1</h1>
                </div>
                <div className="order-1 rounded-lg shadow-xl shadow-pink-800 w-5/12">
                  <div className="bg-white rounded-md border">
                    <h3 className="text-lg font-bold text-navblue flex justify-center py-1">Codeish (An E-Learning Platform)</h3>
                    <div className="w-full flex justify-center">
                      <img src="codeish.png" alt="logo" width="100%" />
                    </div>
                    <div>
                      {!visPro1 ?
                        <button onClick={() => setVisPro1(true)} className="text-navblue w-full rounded-md py-1 px-1 mt-2 flex justify-center">More&nbsp;<BsChevronDoubleDown className="mt-1" /></button>
                        :
                        <>
                          <div className="flex justify-center">
                            <ul className="bg-white rounded-lg w-full text-navblue">
                              <li className="px-2 py-2 border-b border-gray-200 w-full">This is an E-Learning Plateform for learn the coding related courses related to DSA, Development, Open-Source, Coding Practice etc.</li>
                              <li className="px-2 py-2 border-b border-gray-200 w-full">This Website have the features like Bookmark, Feedback, Rating, User Authentication etc for courses.</li>
                            </ul>
                          </div>
                          <button onClick={() => setVisPro1(false)} className="text-navblue w-full rounded-md py-1 px-1 mt-2 flex justify-center">Hide&nbsp;<BsChevronDoubleUp className="mt-1" /></button>
                        </>
                      }
                    </div>
                    <div className="p-2">
                      <div className="flex justify-between">
                        <button className="text-white w-5/12 bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">Github</button>
                        <button className="text-white w-5/12 bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">Website</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-navblue font-semibold text-lg">2</h1>
                </div>
                <div className="order-1 rounded-lg shadow-xl shadow-pink-800 w-5/12">
                  <div className="bg-white rounded-md border">
                    <h3 className="text-lg font-bold text-navblue flex justify-center py-1">Hale Metal India (An E-Commerce Platform)</h3>
                    <div className="w-full flex justify-center">
                      <img src="hale.png" alt="logo" width="100%" />
                    </div>
                    <div>
                      {!visPro2 ?
                        <button onClick={() => setVisPro2(true)} className="text-navblue w-full rounded-md py-1 px-1 mt-2 flex justify-center">More&nbsp;<BsChevronDoubleDown className="mt-1" /></button>
                        :
                        <>
                          <div className="flex justify-center">
                            <ul className="bg-white rounded-lg w-full text-navblue">
                              <li className="px-2 py-2 border-b border-gray-200 w-full">This is an E-Commerce Plateform for selling metal products by Companies.</li>
                              <li className="px-2 py-2 border-b border-gray-200 w-full">This Platform have the features like Add to Cart, Payment Gateway, Seller Dashboard, User Dashboard, Users Authentication etc.</li>
                            </ul>
                          </div>
                          <button onClick={() => setVisPro2(false)} className="text-navblue w-full rounded-md py-1 px-1 mt-2 flex justify-center">Hide&nbsp;<BsChevronDoubleUp className="mt-1" /></button>
                        </>
                      }
                    </div>
                    <div className="px-2 pb-2">
                      <div className="flex justify-between">
                        <button className="text-white w-5/12 bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">Github</button>
                        <button className="text-white w-5/12 bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">Website</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-navblue">3</h1>
                </div>
                <div className="order-1 rounded-lg shadow-xl shadow-pink-800 w-5/12">
                  <div className="bg-white rounded-md border">
                    <h3 className="text-lg font-bold text-navblue flex justify-center py-1">Quiz Mobile Application</h3>
                    <div className="w-full flex justify-center">
                      <img src="quiz.png" alt="logo" width="100%" />
                    </div>
                    <div>
                      {!visPro3 ?
                        <button onClick={() => setVisPro3(true)} className="text-navblue w-full rounded-md py-1 px-1 mt-2 flex justify-center">More&nbsp;<BsChevronDoubleDown className="mt-1" /></button>
                        :
                        <>
                          <div className="flex justify-center">
                            <ul className="bg-white rounded-lg w-full text-navblue">
                              <li className="px-2 py-2 border-b border-gray-200 w-full">The main motive of this project is to make it easy for students to practice their skills.</li>
                              <li className="px-2 py-2 border-b border-gray-200 w-full">Experts can create here different types of quizzes based on their subjects and can add any no of questions.</li>
                              <li className="px-2 py-2 border-b border-gray-200 w-full">The Students can attempt quizzes and can check results immediately.</li>
                            </ul>
                          </div>
                          <button onClick={() => setVisPro3(false)} className="text-navblue w-full rounded-md py-1 px-1 mt-2 flex justify-center">Hide&nbsp;<BsChevronDoubleUp className="mt-1" /></button>
                        </>
                      }
                    </div>
                    <div className="p-2">
                      <div className="flex justify-between">
                        <button className="text-white w-5/12 bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">Github</button>
                        <button className="text-white w-5/12 bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">Website</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-navblue font-semibold text-lg">4</h1>
                </div>
                <div className="order-1 rounded-lg shadow-xl shadow-pink-800 w-5/12">
                  <div className="bg-white rounded-md border">
                    <h3 className="text-lg font-bold text-navblue flex justify-center py-1">Syntax Highlighter and Auto-completion for SQL</h3>
                    <div className="w-full flex justify-center">
                      <img src="shac.png" alt="logo" width="100%" />
                    </div>
                    <div>
                      {!visPro4 ?
                        <button onClick={() => setVisPro4(true)} className="text-navblue w-full rounded-md py-1 px-1 mt-2 flex justify-center">More&nbsp;<BsChevronDoubleDown className="mt-1" /></button>
                        :
                        <>
                          <div className="flex justify-center">
                            <ul className="bg-white rounded-lg w-full text-navblue">
                              <li className="px-2 py-2 border-b border-gray-200 w-full">In this project, We can use this online IDE for writing SQL code with the help of syntax highlighter and auto-completion facilities.</li>
                              <li className="px-2 py-2 border-b border-gray-200 w-full">This project is useful for SQL programmers to time-saving and reduces errors.</li>
                            </ul>
                          </div>
                          <button onClick={() => setVisPro4(false)} className="text-navblue w-full rounded-md py-1 px-1 mt-2 flex justify-center">Hide&nbsp;<BsChevronDoubleUp className="mt-1" /></button>
                        </>
                      }
                    </div>
                    <div className="p-2">
                      <div className="flex justify-between">
                        <button className="text-white w-5/12 bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">Github</button>
                        <button className="text-white w-5/12 bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 rounded-md py-1 px-1 mt-2">Website</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3 pt-24 md:pt-40" id="opensource">
          <p className="text-white font-bold text-4xl">Open</p>
          <p className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Source</p>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12 justify-center">
          <a href="https://stardev.io/developers/pankajkumarbij"><img alt="Check out pankajkumarbij's profile on stardev.io" src="https://stardev.io/developers/pankajkumarbij/badge/languages/global.svg" /></a>
        </div>

        <div className="flex justify-center space-x-3 pt-24 md:pt-40" id="contact">
          <p className="text-white font-bold text-4xl">Contact</p>
          <p className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Me</p>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12">
          <div className="md:flex bg-gradient-to-r from-pink-400 to-orange-400 rounded-br-lg rounded-bl-[100px] rounded-tr-[100px] rounded-tl-lg">
            <div className="flex w-full md:w-1/2 justify-center">
              <img src="./contact.png" alt="home" className="w-8/12" />
            </div>
            <div className="flex w-full md:w-1/2 justify-center pb-12">
              <div className="mt-12 w-10/12">
                <div className="flex justify-between mb-4">
                    <input type="text" className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md p-2.5" placeholder="First Name"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md p-2.5" placeholder="Last Name"/>
                </div>
                <div className="mb-4">
                  <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5" placeholder="Enter your Email"/>
                </div>
                <div className="mb-4">
                  <textarea rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5" placeholder="Enter your Message"></textarea>
                </div>
                <div>
                  <button className="flex justify-center w-full text-white font-bold px-4 py-2 rounded-md bg-navblue"><FiSend className="mt-1 mr-1" />Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}