import React from 'react'
import Member from './member'

const AboutUs:React.FC = () => {
    return(
        <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
            <div className="container mx-auto px-11">
                <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                    <strong>We will help you shop better apps, faster.</strong>
                    Our team of expert engineers has created the best user experience in some of the most popular apps worldwide
                </p>
            </div>
            <div className="container mx-auto px-11 text-center mt-28">
                <h2>Our Team</h2>
                <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
                <div className="mt-10 grid grid-cols md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                    <Member id="marc" name="Marc" socialId="@mrousavy" link="https://github.com/mrousavy" />
                    <Member id="szymon" name="Szymon" socialId="@szymon20000" link="https://github.com/szymon20000" />
                    <Member id="thomas" name="Thomas" socialId="@thomas-coldwell" link="https://github.com/thomas-coldwell" />
                    <Member id="christoph" name="Christoph" socialId="@chrispader" link="https://github.com/chrispader" />
                    <Member id="janic" name="Janic" socialId="@janicduplessis" link="https://github.com/janicduplessis" />
                    <Member id="akinn" name="Akinn" socialId="@akinncar" link="https://github.com/akinncar" />
                    <Member id="mo" name="Mo" socialId="@gorhom" link="https://github.com/gorhom" />
                    <Member id="eric" name="Eric" socialId="@ericvicenti" link="https://github.com/ericvicenti" />
                    <Member id="matei" name="Matei" socialId="@mateioprea" link="https://github.com/mateioprea" />
                    <Member id="viktoria" name="Viktoria" socialId="@viktoria.psd" link="https://www.instagram.com/viktoria.psd" />

                </div>
            </div>
        </section>
    )
}

export default AboutUs