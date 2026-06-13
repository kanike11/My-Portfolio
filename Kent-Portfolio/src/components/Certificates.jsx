import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

import databaseCertificate from '../assets/Databases.jpg';
import networkSecurityCertificate from '../assets/Network Security.jpg';
import cybersecurityCertificate from '../assets/Cybersecurity.jpg';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            id: 3,
            title: 'Cybersecurity',
            issuer: 'Certiport — IT Specialist',
            date: 'May 2026',
            image: cybersecurityCertificate,
            verifyUrl: 'https://certiport.com',
            icon: cybersecurityCertificate
        },
        {
            id: 2,
            title: 'Network Security',
            issuer: 'Certiport — IT Specialist',
            date: 'March 2026',
            image: networkSecurityCertificate,
            verifyUrl: 'https://certiport.com',
            icon: networkSecurityCertificate
        },     
        {
            id: 1,
            title: 'Database Fundamentals',
            issuer: 'Certiport — IT Specialist',
            date: 'May 2025',
            image: databaseCertificate,
            verifyUrl: 'https://certiport.com',
            icon: databaseCertificate
        },
    ];

    return (
        <section className="certificates-section">
            <div className="certificates-container">
                <div className="certificates-header">
                    <h1 className="certificates-title">Certificates & Achievements</h1>
                    <p className="certificates-subtitle">Professional certifications and completed courses</p>
                </div>

                <div className="certificates-grid">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="certificate-card"
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="cert-icon">
                                <img src={cert.icon} alt={cert.title} />
                            </div>
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <div className="cert-date">{cert.date}</div>
                            <button className="cert-link">
                                View Certificate
                                <span className="external-icon">↗</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedCert && (
                <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close"
                            onClick={() => setSelectedCert(null)}
                        >
                            <X size={24} />
                        </button>

                        <div className="modal-certificate-image">
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML =
                                        '<div class="placeholder-cert">Certificate Image</div>';
                                }}
                            />
                        </div>

                        <div className="modal-info">
                            <h2>{selectedCert.title}</h2>
                            <p className="modal-issuer">{selectedCert.issuer}</p>
                            <div className="modal-details">
                                <div className="detail-row">
                                    <span className="detail-label">Date Awarded:</span>
                                    <span className="detail-value">{selectedCert.date}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-value">{selectedCert.certificateNumber}</span>
                                </div>
                            </div>
                            <a href={selectedCert.verifyUrl} className="verify-button" target="_blank" rel="noopener noreferrer">
                                Verify Certificate
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;