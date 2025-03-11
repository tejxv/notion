import { FaRegEnvelope } from '@react-icons/all-files/fa/FaRegEnvelope'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaBehance } from '@react-icons/all-files/fa/FaBehance'
import { FaMedium } from '@react-icons/all-files/fa/FaMedium'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import * as React from 'react'

import * as config from '@/lib/config'
// Don't import the dark mode hook when dark mode is disabled
// import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

// Config flag to enable/disable dark mode
const darkModeON = false

export function FooterImpl() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const currentYear = new Date().getFullYear()

  // Force light mode when component mounts
  React.useEffect(() => {
    setHasMounted(true)

    // Force light mode
    document.body.classList.add('light-mode')
    document.body.classList.remove('dark-mode')

    // Update localStorage
    try {
      localStorage.setItem('darkMode', JSON.stringify(false))
    } catch (err) {
      console.error('Failed to set localStorage', err)
    }
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © {currentYear} {config.author}
      </div>

      <div className={styles.settings}>
        {/* Dark mode toggle is completely removed */}
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.linkedin}
            href={`https://www.behance.net/manyakaushik`}
            title={`Behance ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaBehance />
          </a>
        )}

        {config.mastodon && (
          <a
            className={styles.mastodon}
            href={config.mastodon}
            title={`Mastodon ${config.getMastodonHandle()}`}
            rel='me'
          >
            <FaMastodon />
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <>
            <a
              className={styles.linkedin}
              href={`https://www.linkedin.com/in/${config.linkedin}`}
              title={`LinkedIn of ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
            <a
              className={styles.twitter}
              href={`https://www.behance.net/manyakaushik`}
              title={`Behance of Manya Kaushik`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaBehance />
            </a>
            <a
              className={styles.twitter}
              href={`https://medium.com/@manya.manuseema`}
              title={`Medium of Manya Kaushik`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaMedium />
            </a>
            <a
              className={styles.twitter}
              href={`mailto:manya.k@nid.edu`}
              title={`Email Manya Kaushik`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaRegEnvelope />
            </a>
          </>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaRegEnvelope />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
