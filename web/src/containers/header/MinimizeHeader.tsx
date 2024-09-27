import HeaderMenu from './HeaderMenu'

export default function MinimizeHeader() {
  return (
    <div className="fixed right-0 z-10 grid h-14 place-items-center">
      <div className="justify-self-end">
        <HeaderMenu />
      </div>
    </div>
  )
}
