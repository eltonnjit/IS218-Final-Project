import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from "./Button"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="box">
      <div className="group">
        <div className="overlap-group">
          <img className="rectangle" alt="Rectangle" src="rectangle-84.png" />
          <div className="card-wrapper">
            <Card className="isdisabled-false" isDisabled={false} />
          </div>
    </main>
  )
}
