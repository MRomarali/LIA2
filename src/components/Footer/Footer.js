import React from 'react'

import "./Footer.css"
function Footer(props) {
    return (
        <div className="footer-body">
            <footer id="footer">
                <section>
							<h2>Grannar Entreprenad</h2>
							<ul className="actions">
								<li><a href="generic.html" class="button">Learn More</a></li>
							</ul>
						</section>
						<section>
							<h2>Kontakt uppgifter</h2>
							<dl className="alt">
								<dt>Address</dt>
								<dd>Kronoberg &bull; Lessebo &bull; Sverige</dd>
								<dt>Phone</dt>
								<dd>070 000 00 00</dd>
								<dt>Email</dt>
								<dd>mail@gmail.com</dd>
							</dl>
							</section>
					</footer>
        </div>
    )
}



export default Footer

