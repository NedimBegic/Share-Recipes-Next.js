import styleHome from "./Home.module.css";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import homeImg2 from "../../public/homeImg2.jpg";
import logo from "../../public/logo.png";
import { animate, motion } from "framer-motion";
import julia from "../../public/julia.jpg";
import Link from "next/link";
import filter from "../../public/filter.png";
import rate from "../../public/rate.png";
import comment from "../../public/comment.png";
import foodHome from "../../public/foodHome.png";
import cezar from "../../public/cezar.png";
import puck from "../../public/puck.jpeg";
import puckLeves from "../../public/puckleves.png";
import Up from "./Up";
const Home = (props) => {
  /* ++++++++++ state for first do to scroll to */
  const headRef = useRef();
  const [upDiv, setUpDiv] = useState(headRef.current);
  /*  enable smooth scroll */
  /* ++++++++++++++div that is scrolled to */
  useEffect(() => {
    setUpDiv(headRef.current);
  }, []);

  const handleScroll = () => {
    upDiv.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={headRef} className={styleHome.all}>
      <div className={styleHome.info}>
        <Image
          className={styleHome.infoImg}
          src={homeImg2}
          alt="background picture"
        />
        <div>
          <Image className={styleHome.logo} src={logo} alt="logo" />
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            A site where you can get new ideas, improve your cooking skills, and
            share your knowledge with others.
          </motion.p>
        </div>
      </div>
      <div className={styleHome.firstQuote}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image className={styleHome.julia} src={julia} alt="julia child" />
          <h3>Julia Child</h3>
          <motion.q
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            You learn to cook so that you don’t have to be a slave to recipes.
            You get what’s in season and you know what to do with it.
          </motion.q>{" "}
        </motion.div>
        <Image className={styleHome.cezar} src={cezar} alt="leves" />
      </div>
      <div className={styleHome.sugestion}>
        {
          <motion.article
            initial={{ opacity: 0.5, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              className={styleHome.foodHomeSmall}
              src={foodHome}
              alt="food picture"
            />
          </motion.article>
        }
        <motion.section
          className={styleHome.section}
          initial={{ opacity: 0, x: -600 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            className={styleHome.foodHome}
            src={foodHome}
            alt="food picture"
          />
        </motion.section>
        <div>
          <h3>Don't know what to cook ?</h3>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            Look for ideas in our recipes list. Filter for the category you like
            or choose between three difficulties.
          </motion.p>

          <Image
            className={styleHome.filter}
            src={filter}
            alt="filter picture"
          />
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            Rate specific recipe{" "}
          </motion.p>
          <Image className={styleHome.filter} src={rate} alt="rate" />
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            or write a comment to express your opinion about it.
          </motion.p>
          <Image className={styleHome.comment} src={comment} alt="comment" />
          <Link className={styleHome.button} href={"/recipes"}>
            See recipes
          </Link>
        </div>
      </div>
      <div className={styleHome.firstQuote}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styleHome.puckDiv}
        >
          <Image className={styleHome.julia} src={puck} alt="puck" />
          <h3>Wolfgang Puck</h3>
          <motion.q
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Cooking is like painting or writing a song. Just as there are only
            so many notes or colors, there are only so many flavors - it’s how
            you combine them that sets you apart.
          </motion.q>
          <Image
            className={styleHome.puckLeves}
            src={puckLeves}
            alt="puck leves image"
          />
        </motion.div>
      </div>
      <div className={styleHome.share}>
        <div>
          <h3>Want to share your idea?</h3>
          <p>
            Click the button and complete our form to post your recipe. Notes
            for the form below!
          </p>
          <ul>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              you must fill out the title and the description input
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              type, origin and duration is optional
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              if you don't fill out the ingredient inputs it will be considered
              as secret ingredients
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              you can write down the steps of preparation (optional)
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              if you don't give in an image url, a default one will be set
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              you can put in a video url to make it easier to follow (only
              youtube ), otherwise a default one will be set.
            </motion.li>
          </ul>
          <Link
            className={styleHome.secondButton + " " + styleHome.button}
            style={{ boxShadow: "0 0 20px #2f3130" }}
            href={"/add-recipe"}
          >
            Share recipe
          </Link>
        </div>
      </div>
      <Up onClick={handleScroll} />
    </div>
  );
};

export default Home;
