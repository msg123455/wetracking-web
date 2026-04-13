"use client"
import React from 'react';
import { Shield } from 'lucide-react';

export default function PoliticaDatos() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-[#00ffd7] rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-[#0b194f]" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-[#0b194f]">Política de Protección de Datos Personales</h1>
            <p className="text-sm text-gray-500">WE TRACKING SAS — Fecha de emisión: 10/01/2025 · Versión: 01</p>
          </div>
        </div>

        <div className="text-gray-700 space-y-6 mt-8">

          {/* 1. CONSIDERACIONES */}
          <section>
            <h2 className="text-lg font-bold text-[#0b194f] mb-3">1. CONSIDERACIONES</h2>
            <p className="mb-3">
              Dando cumplimiento a lo dispuesto en la Ley estatutaria 1581 de 2012 y a su Decreto Reglamentario 1377 de 2013, la empresa WE TRACKING SAS adopta la presente política para el tratamiento de datos personales, la cual será informada a todos los titulares de los datos recolectados o que en el futuro se obtengan en el ejercicio de las actividades, comerciales o laborales que desempeñe la compañía.
            </p>
            <p className="mb-3">
              La empresa WE TRACKING SAS como entidades responsables y/o encargada del tratamiento de datos personales, generan la siguiente política de tratamiento de datos personales de sus clientes y usuarios que garantiza los derechos de privacidad, intimidad, y buen nombre, en el tratamiento de los datos personales, en consecuencia, todas sus actuaciones se regirán por los principios:
            </p>
            <div className="space-y-2">
              <p><strong>Principio de Legalidad:</strong> El Tratamiento de datos es una actividad reglada que debe sujetarse a lo estableció en la ley y las demás disposiciones que la desarrollen.</p>
              <p><strong>Principio de Finalidad:</strong> El tratamiento debe obedecer a una finalidad legítima de acuerdo con la Constitución y la Ley, la cual debe ser informada al titular. En lo correspondiente a la recolección de datos personales, la empresa WE TRACKING SAS se limitarán a aquellos datos que sean pertinentes y adecuados para la finalidad con la cual fueron recolectados o requeridos.</p>
              <p><strong>Principio de Libertad:</strong> El tratamiento solo puede ejercerse con el consentimiento previo, expreso, e informado del titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento.</p>
              <p><strong>Principio de Calidad:</strong> La información sujeta a tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. Se prohíbe el tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error.</p>
              <p><strong>Principio de Transparencia:</strong> En el tratamiento debe garantizarse el derecho del titular a obtener del responsable del tratamiento o del encargado del tratamiento, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan.</p>
              <p><strong>Principio de acceso y Circulación restrictiva:</strong> El tratamiento se sujeta a los límites que se derivan de la naturaleza de los datos personales, de las disposiciones de la ley y la Constitución. En este sentido, el tratamiento sólo podrá hacerse por personas autorizadas por el titular y/o por las personas previstas en la ley.</p>
              <p><strong>Principio de Seguridad:</strong> la información sujeta a tratamiento deberá manejarse con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.</p>
              <p><strong>Principio de Confidencialidad:</strong> La empresa WE TRACKING SAS está obligada a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el tratamiento, pudiendo sólo realizar suministro o comunicación de datos personales cuando ello corresponda al desarrollo de las actividades autorizadas en la ley.</p>
            </div>
          </section>

          {/* 2. DEFINICIONES */}
          <section>
            <h2 className="text-lg font-bold text-[#0b194f] mb-3">2. DEFINICIONES PRINCIPALES</h2>
            <p className="mb-3">Las expresiones utilizadas en mayúsculas en esta Política tendrán el significado que aquí se les otorga, o el significado que la ley o la jurisprudencia aplicable les den, según dicha ley o jurisprudencia sea modificada de tiempo en tiempo.</p>
            <ol className="list-[lower-alpha] pl-6 space-y-2">
              <li><strong>Autorizado:</strong> Es la Compañía y todas las personas bajo la responsabilidad de la Compañía, que por virtud de la Autorización y de estas Políticas tienen legitimidad para Tratar los Datos Personales del Titular.</li>
              <li><strong>Autorización:</strong> Es el consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de sus Datos Personales.</li>
              <li><strong>Base de Datos:</strong> Es el conjunto organizado de Datos Personales que sean objeto de Tratamiento, electrónico o no, cualquiera que fuere la modalidad de su formación, almacenamiento, organización y acceso.</li>
              <li><strong>Dato Personal:</strong> Es cualquier información de cualquier tipo, vinculada o que pueda asociarse a una o varias personas naturales o jurídicas determinadas o determinables.</li>
              <li><strong>Dato Público:</strong> Es el Dato Personal calificado como tal según los mandatos de la ley o de la Constitución Política y aquel que no sea semiprivado, privado o sensible.</li>
              <li><strong>Dato Sensible:</strong> Se entiende por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, entre otros.</li>
              <li><strong>Encargado del Tratamiento:</strong> Es la persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de Datos Personales por cuenta del Responsable del Tratamiento.</li>
              <li><strong>Titular del Dato Personal:</strong> Es la persona natural o jurídica a quien se refiere la información que reposa en una Base de Datos, y quien es el sujeto del derecho de hábeas data.</li>
              <li><strong>Habilitación:</strong> Es la legitimación que expresamente y por escrito, otorgue la Compañía a terceros, en cumplimiento de la Ley aplicable, para el Tratamiento de Datos Personales.</li>
              <li><strong>Responsable de Tratamiento:</strong> Es la persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la Base de Datos y/o el Tratamiento de los Datos Personales.</li>
              <li><strong>Transferencia:</strong> Es el Tratamiento de Datos Personales que implica la comunicación de estos dentro o fuera del territorio de la República de Colombia.</li>
              <li><strong>Transmisión:</strong> Es la actividad de Tratamiento de Datos Personales mediante la cual se comunican los mismos, internamente o con terceras personas, dentro o fuera del territorio de la República de Colombia.</li>
              <li><strong>Tratamiento de Datos Personales:</strong> Es toda operación y procedimiento sistemático, electrónico o no, que permita la recolección, conservación, ordenamiento, almacenamiento, modificación, uso, circulación, evaluación, bloqueo, destrucción y en general, el procesamiento de Datos Personales.</li>
            </ol>
          </section>

          {/* 3. TRATAMIENTO Y FINALIDADES */}
          <section>
            <h2 className="text-lg font-bold text-[#0b194f] mb-3">3. TRATAMIENTO Y FINALIDADES</h2>
            <p className="mb-3">Los Datos Personales tratados por la empresa WE TRACKING SAS deberán someterse estricta y únicamente a las siguientes finalidades:</p>
            <ol className="list-[lower-alpha] pl-6 space-y-2">
              <li>Gestionar toda la información necesaria para el cumplimiento de las obligaciones tributarias y de registros comerciales, corporativos y contables de WE TRACKING SAS.</li>
              <li>Cumplir con los procesos internos de WE TRACKING SAS en materia de administración de proveedores, contratistas y empleados.</li>
              <li>Cumplir los contratos de servicios celebrados con los clientes.</li>
              <li>Prestar sus servicios de acuerdo con las necesidades particulares de los clientes de la empresa WE TRACKING SAS.</li>
              <li>Las demás finalidades que determinen los Responsables en procesos de obtención de Datos Personales para su Tratamiento y que sean comunicadas a los Titulares en el momento de la recolección.</li>
              <li>El proceso de archivo, de actualización de los sistemas, de protección y custodia de información y bases de datos de la empresa WE TRACKING SAS.</li>
              <li>Procesos al interior de la compañía, con fines de desarrollo u operativo y/o de administración de sistemas.</li>
              <li>La transmisión de datos a terceros con los cuales se hayan celebrado contratos con este objeto, para fines comerciales, administrativos, de mercadeo y/o operativos.</li>
              <li>Mantener y procesar por computadora u otros medios, cualquier tipo de información relacionada con el negocio del cliente.</li>
              <li>Dar cumplimiento a las obligaciones legales y regulatorias, así como de las políticas de la empresa WE TRACKING SAS.</li>
              <li>Efectuar las gestiones pertinentes para el desarrollo de la etapa precontractual, contractual y pos contractual de cualquiera de los productos y servicios ofrecidos.</li>
              <li>Gestionar trámites (solicitudes, quejas, reclamos), realizar análisis de riesgo, efectuar encuestas de satisfacción.</li>
              <li>Suministrar información de contacto a la fuerza comercial y/o red de distribución, telemercadeo, investigación de mercados.</li>
              <li>Dar a conocer, transferir y/o trasmitir los datos personales dentro y fuera del país, a terceros a consecuencia de un contrato, ley o vínculo lícito.</li>
              <li>Para el envío y recepción de elementos o material publicitario.</li>
              <li>Controlar y prevenir el fraude en cualquiera de sus modalidades.</li>
            </ol>
          </section>

          {/* 4. RESPONSABLE */}
          <section>
            <h2 className="text-lg font-bold text-[#0b194f] mb-3">4. RESPONSABLE Y ENCARGADO DEL TRATAMIENTO DE DATOS</h2>
            <p>El responsable del tratamiento de datos personales es la empresa <strong>WE TRACKING SAS</strong>, con dirección y domicilio en Carrera 7 No 150 93 OF 502, Bogotá – Cundinamarca; teléfono: 3117001527; correo electrónico: <a href="mailto:gestionhumana@grouptso.com" className="text-[#007aed] underline">gestionhumana@grouptso.com</a> o <a href="mailto:hseq@grouptso.com" className="text-[#007aed] underline">hseq@grouptso.com</a>.</p>
          </section>

          {/* 5. DERECHOS */}
          <section>
            <h2 className="text-lg font-bold text-[#0b194f] mb-3">5. DERECHOS DE LOS TITULARES DE LA INFORMACIÓN</h2>
            <p className="mb-3">Conforme a la legislación vigente y el artículo 8 de la Ley 1581 de 2012, son derechos de los Titulares:</p>
            <ol className="list-[lower-alpha] pl-6 space-y-2">
              <li><strong>Derecho a conocer, actualizar y rectificar sus datos personales:</strong> Los Titulares podrán ejercer este derecho frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error o cuyo tratamiento no haya sido autorizado.</li>
              <li><strong>Derecho a solicitar prueba de la autorización:</strong> Los Titulares podrán solicitar prueba de la autorización otorgada para el tratamiento de sus datos, conforme al artículo 9 de la Ley 1581 de 2012.</li>
              <li><strong>Derecho a ser informado sobre el uso de sus datos personales:</strong> Los Titulares tienen derecho a conocer en cualquier momento el uso que se les ha dado a sus datos personales.</li>
              <li><strong>Derecho a revocar la autorización y/o solicitar la supresión del dato:</strong> Los Titulares podrán revocar la autorización otorgada a WE TRACKING SAS si evidencian que no han sido respetados los principios, derechos y garantías constitucionales y legales.</li>
              <li><strong>Derecho a acceder a sus datos personales:</strong> Los Titulares podrán acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
            </ol>
          </section>

          {/* 6. DEBERES */}
          <section>
            <h2 className="text-lg font-bold text-[#0b194f] mb-3">6. DEBERES DEL RESPONSABLE DEL TRATAMIENTO</h2>
            <ol className="list-[lower-alpha] pl-6 space-y-2">
              <li>Garantizar al Titular, en todo tiempo, el pleno y efectivo derecho de Hábeas Data.</li>
              <li>Solicitar y conservar copia de la autorización otorgada por el Titular.</li>
              <li>Informar debidamente al Titular sobre la finalidad de la recolección y los derechos que le asisten.</li>
              <li>Conservar la información bajo condiciones de seguridad necesarias para impedir su adulteración, pérdida o acceso no autorizado.</li>
              <li>Rectificar la información cuando ésta sea incorrecta.</li>
              <li>Tramitar las consultas y reclamos formulados en los términos señalados en la Ley 1581 de 2012.</li>
              <li>Actualizar las novedades sobre la información reportada por los Titulares dentro de los cinco (5) días hábiles contados a partir del recibo.</li>
              <li>Realizar oportunamente la actualización, rectificación o supresión de los datos en los términos señalados en la ley 1581 de 2012.</li>
            </ol>
          </section>

          {/* 7. PROCEDIMIENTOS */}
          <section>
            <h2 className="text-lg font-bold text-[#0b194f] mb-3">7. PROCEDIMIENTOS PARA EJERCER LOS DERECHOS</h2>
            <p className="mb-3">En caso de que desee ejercer sus derechos, el Titular deberá enviar un correo electrónico o comunicación física a las direcciones de contacto establecidas en la presente Política.</p>
            <div className="space-y-3">
              <p><strong>1. Peticiones y Consultas:</strong> WE TRACKING SAS responderá en plazo máximo de diez (10) días hábiles. Cuando no fuere posible, se informará al Titular los motivos de la demora y la fecha de atención, la cual no podrá superar cinco (5) días hábiles adicionales.</p>
              <p><strong>2. Revocación y Reclamos:</strong> El reclamo se formulará mediante solicitud dirigida a WE TRACKING SAS con identificación del Titular y descripción de los hechos. Una vez recibido, se incluirá en la base de datos la leyenda "reclamo en trámite" en un término no mayor a dos (2) días hábiles.</p>
              <p><strong>3.</strong> El término máximo para atender el reclamo será de quince (15) días hábiles. Cuando no fuere posible, se informará al Titular los motivos de la demora, sin superar ocho (8) días hábiles adicionales.</p>
            </div>
          </section>

          {/* 8. MODIFICACIÓN */}
          <section>
            <h2 className="text-lg font-bold text-[#0b194f] mb-3">8. MODIFICACIÓN Y/O ACTUALIZACIÓN DE LA POLÍTICA</h2>
            <p>Cualquier cambio sustancial en las políticas de tratamiento, se comunicará de forma oportuna a los titulares de los datos a través de los medios habituales de contacto.</p>
          </section>

          {/* 9. VIGENCIA */}
          <section>
            <h2 className="text-lg font-bold text-[#0b194f] mb-3">9. VIGENCIA</h2>
            <p>Esta Política rige a partir del 10 de Enero de 2025. Los Datos Personales que sean almacenados, utilizados o transmitidos permanecerán en nuestra Base de Datos durante el tiempo que sea necesario para las finalidades mencionadas en esta Política, para las cuales fueron recolectados.</p>
          </section>

          {/* Firma */}
          <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
            <p className="font-semibold text-[#0b194f]">KAREN ROCIO ROJAS BARRETO</p>
            <p>Representante Legal — WE TRACKING SAS</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-[#007aed] text-white font-bold rounded-xl hover:bg-[#0b194f] transition-colors"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
