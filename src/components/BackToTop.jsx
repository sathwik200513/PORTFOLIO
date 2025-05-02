import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const BackToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      if (!show && window.scrollY > 400) {
        setShow(true)
      } else if (show && window.scrollY <= 400) {
        setShow(false)
      }
    }

    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [show])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: blue;
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          z-index: 99;
          transition: background-color 0.3s;
        }
        .back-to-top:hover {
          background-color: var(--primary-dark);
        }
        .back-to-top svg {
          font-size: 1.2rem;
        }
        @media (max-width: 768px) {
          .back-to-top {
            width: 40px;
            height: 40px;
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </>
  )
}

export default BackToTop
