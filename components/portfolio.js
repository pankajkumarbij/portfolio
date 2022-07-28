import { useState } from 'react';
import { FiDownload, FiMail, FiPhoneCall, FiSend } from 'react-icons/fi';
import  { FaGithub, FaGraduationCap, FaLinkedin } from 'react-icons/fa';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';

export default function Portfolio() {

  const [visPro1, setVisPro1] = useState(false); 
  const [visPro2, setVisPro2] = useState(false); 
  const [visPro3, setVisPro3] = useState(false); 
  const [visPro4, setVisPro4] = useState(false); 

  function scrollDown(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <div className="bg-navblue h-full w-full font-serif">

        <div className="w-full flex px-2 md:px-44 py-4 justify-between fixed top-0 bg-navblue">
          <div>
            <button onClick={()=>scrollDown("personal")}><p className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Pankaj</p></button>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row space-x-8 mt-1.5">
              <button onClick={()=>scrollDown("about")}><li className="text-white">About</li></button>
              <button onClick={()=>scrollDown("skills")}><li className="text-white">Skills</li></button>
              <button onClick={()=>scrollDown("education")}><li className="text-white">Education</li></button>
              <button onClick={()=>scrollDown("projects")}><li className="text-white">Projects</li></button>
              <button onClick={()=>scrollDown("experience")}><li className="text-white">Experience</li></button>
              <button onClick={()=>scrollDown("openSource")}><li className="text-white">Open Source</li></button>
            </ul>
          </div>
          <div>
            <button onClick={()=>scrollDown("contact")} className="flex text-white font-bold px-3 py-2 rounded-md bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400"><FiPhoneCall className="mt-0.5 mr-2" />Contact Me</button>
          </div>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12 pt-40" id="personal">
          <div className="flex w-full md:w-1/2 justify-start">
            <div className="space-y-2 mt-12">
              <p className="text-gray-300">WELCOME TO MY WORLD</p>
              <p className="text-white font-bold text-6xl">Hi, I'm Pankaj</p>
              <p className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Full-Stack Software Developer</p>
              <p className="text-gray-300 text-lg">I'm the software developer at Asthara Agro in India</p>
              <p className="text-gray-300 text-lg">Visit my profile and Stay connected with me</p>
              <div className="flex justify-between">
                <button className="flex justify-center w-5/12 text-white font-bold px-4 py-2 mt-8 rounded-md bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400"><FiDownload className="mt-0.5 mr-2" />My Resume</button>
                <button className="flex justify-center w-5/12 text-white font-bold px-4 py-2 mt-8 rounded-md bg-gradient-to-r from-pink-400 to-orange-400 hover:from-orange-400 hover:to-pink-400 md:mr-3"><FiMail className="mt-0.5 mr-2" />Hire Me</button>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 justify-end">
            <img src="./home.png" alt="home" className="w-9/12" />
          </div>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12 pt-40" id="about">
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

        <div className="flex justify-center space-x-3 pt-40" id="education">
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
              <div className="mt-3 bg-white rounded-md p-4 shadow-lg shadow-orange-700 mx-4">
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
              <div className="mt-3 bg-white rounded-md p-4 shadow-lg shadow-orange-700 mx-4">
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
              <div className="mt-3 bg-white rounded-md p-4 shadow-lg shadow-orange-700 mx-4">
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

        <div className="flex justify-center space-x-3 pt-40" id="experience">
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
                <div className="order-1 rounded-lg shadow-xl shadow-orange-700 w-5/12">
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
                <div className="order-1 rounded-lg shadow-xl shadow-orange-700 w-5/12">
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

            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3 pt-40" id="projects">
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
                <div className="order-1 rounded-lg shadow-xl shadow-orange-700 w-5/12">
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
                <div className="order-1 rounded-lg shadow-xl shadow-orange-700 w-5/12">
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
                <div className="order-1 rounded-lg shadow-xl shadow-orange-700 w-5/12">
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
                <div className="order-1 rounded-lg shadow-xl shadow-orange-700 w-5/12">
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

        <div className="flex justify-center space-x-3 pt-40" id="contact">
          <p className="text-white font-bold text-4xl">Contact</p>
          <p className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Me</p>
        </div>

        <div className="md:flex w-full px-2 md:px-44 py-12">
          <div className="md:flex bg-gradient-to-r from-pink-400 to-orange-400 rounded-br-lg rounded-bl-[100px] rounded-tr-[100px] rounded-tl-lg">
            <div className="flex w-full md:w-1/2 justify-center">
              <img src="./contact.png" alt="home" className="w-8/12" />
            </div>
            <div className="flex w-full md:w-1/2 justify-center">
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