import cn from 'clsx'
import { ComposableImage } from 'components/composable-image'
import { ScrollableBox } from 'components/scrollable-box'
import { useStore } from 'lib/store'
import shallow from 'zustand/shallow'
import s from './gallery.module.scss'

export function Gallery() {
  const [selectedProject, galleryVisible, setGalleryVisible] = useStore(
    (state) => [
      state.selectedProject,
      state.galleryVisible,
      state.setGalleryVisible,
    ],
    shallow
  )

  return (
    <div className={cn(s.gallery, galleryVisible && s.visible)}>
      <button className={s.close} onClick={() => setGalleryVisible(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
          <path
            stroke="var(--green)"
            d="M11 1H1v10M15 1h10v10M15 25h10V15M11 25H1V15m7.8-6.2 8.4 8.4m0-8.4-8.4 8.4"
          />
        </svg>
        <p className={cn(s.text, 'p-xs text-uppercase')}>Close</p>
      </button>
      <ScrollableBox className={s.scroller}>
        {selectedProject?.assetsCollection?.items.map((asset, i) => (
          <ComposableImage
            key={i}
            sources={asset.imagesCollection}
            width={1038}
            height={680}
          />
        ))}
      </ScrollableBox>
    </div>
  )
}