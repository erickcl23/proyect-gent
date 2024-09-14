import React, { useState } from 'react';

const DescriptionBox = () => {
  const [selectedTab, setSelectedTab] = useState('description');

  const renderContent = () => {
    if (selectedTab === 'description') {
        return (
            <div className="descriptionbox-description">
                <h1>CREATINE MONOHYDRATE - STAR NUTRITION</h1>
                <h2>Suplemento Dietario a base de 100% PURA Creatina Monohidrato. Micronizada de máxima absorción USP Grado farmacológico.</h2>
                <p>Por sus funciones relacionadas con la resíntesis de ATP en el músculo ante esfuerzos de origen anaeróbico de elevada intensidad y corta duración, la suplementación con creatina es muy utilizada por deportistas. Se ha comprobado que un nivel apropiado de creatina libre en la masa muscular del organismo facilita la reposición y conservación de la fosfocreatina.19 Una persona metaboliza aproximadamente un 1.2% de la creatina que almacena, es decir que un deportista de 70 kg que ronda una cantidad de 120gr a 140gr de creatina en su cuerpo, libera aproximadamente 2gr de creatina, las pérdidas se compensan con una dieta adecuada.</p>
                <p>CREATINE MONOHIDRATE STAR NUTRITION ayuda a fabricar más combustible para el músculo en forma de ATP, esto asegura que los músculos trabajen más rápido durante más tiempo, y también que se recuperen más rápido luego del entrenamiento intenso.
                CREATINE MONOHYDRATE STAR NUTRITION es 100% pura creatina micronizada de máxima absorción USP grado farmacológico.</p>
                <p>Ventajas:</p>
                <ul>
                    <li>Avanzado potenciador del rendimiento.</li>
                    <li>Ayudar a mejorar la fuerza muscular, el rendimiento y la masa magra.</li>
                    <li>Fórmula vegetariana.</li>
                </ul>
                <p>Presentación: 1 Kg. Polvo</p>
            </div>
        );
    } else if (selectedTab === 'usage') {
        return (
            <div className="descriptionbox-description">
                <h1>Modo de Uso</h1>
                <p>Para obtener los mejores resultados, mezclar una cucharada de CREATINE MONOHYDRATE STAR NUTRITION con agua o jugo y consumir inmediatamente después del ejercicio. Se recomienda una dosis diaria de 5 gramos (aproximadamente una cucharada) para mantener los niveles óptimos de creatina en el músculo.</p>
                <p>Consejo: Es importante mantenerse bien hidratado durante el uso de creatina. Beber al menos 8 vasos de agua al día.</p>
            </div>
        );
    }
};

return (
    <div className='descriptionbox'>
        <div className="description-navigator">
            <div 
                className={`description-nav-box ${selectedTab === 'description' ? '' : 'fade'}`}
                onClick={() => setSelectedTab('description')}
            >
                DESCRIPCION
            </div>
            <div 
                className={`description-nav-box ${selectedTab === 'usage' ? '' : 'fade'}`}
                onClick={() => setSelectedTab('usage')}
            >
                MODO DE USO:
            </div>
        </div>
        {renderContent()}
    </div>
);
};

export default DescriptionBox;
