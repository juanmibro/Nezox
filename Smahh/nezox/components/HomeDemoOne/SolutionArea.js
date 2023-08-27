import React from 'react';
import Link from 'next/link';

const SolutionArea = () => {
    return (
        <div className="solution-area pb-70">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6">
						<div className="solution-content">
							<div className="solution-title">
								<span>All-in Solution</span>
								<h2>Our Experts Are Providing and Planning 24/7 Technical Support Services With Product and Security Cnsultation.</h2>
							</div>

							<div className="row">
								<div className="col-lg-12 col-md-6">
									<div className="single-solution overly-one">
										<div className="overly-two">
											<h3>
                                                <Link href="/solution-details">
                                                    <a>Product Consultation</a>
                                                </Link>
											</h3>
											<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
											<span>01</span>
										</div>
									</div>
								</div>

								<div className="col-lg-12 col-md-6">
									<div className="single-solution overly-one">
										<div className="overly-two">
											<h3>
                                                <Link href="/solution-details">
                                                    <a>
                                                        Security Consultation
                                                    </a>
                                                </Link>
											</h3>
											<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
											<span>02</span>
										</div>
									</div>
								</div>

								<div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0">
									<div className="single-solution overly-one">
										<div className="overly-two">
											<h3>
                                                <Link href="/solution-details">
                                                    <a>
                                                        24/7 Technical Support
                                                    </a>
                                                </Link>
											</h3>
											<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
											<span>03</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 pr-0">
						<div className="solution-img">
							<img src="/images/solution-img.png" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default SolutionArea;