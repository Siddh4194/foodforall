import React from 'react'

export default function Footer() {
  return (
    <div>
      <div>
        <footer className="bg-dark text-center text-white">

          <div className="container p-4 pb-0">

            <section className="">
              <form action="">

                <div className="row d-flex justify-content-center">

                  <div>
                    <p>Project Name</p>
                    <strong>Food-For-All Food Waste Management System</strong>
                    <p>Contact</p>
                    {/* <strong>C-DAC Electronic City Bangalore</strong><br></br> */}
                    {/* <strong>foodforall@gmail.com</strong><br></br> */}
                    {/* <strong>+88888888</strong><br></br> */}
                    {/* <strong>+020 22167</strong><br></br> */}
                  </div>

                </div>

              </form>
            </section>

          </div>

          <div className="text-center p-3" >
            © 2023Copyright:
            <div className="text-white">Foodforall.com</div>
          </div>

        </footer>
      </div>

    </div>
  )
}
