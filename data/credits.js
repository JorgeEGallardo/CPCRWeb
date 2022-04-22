const credits = [
    {
        Crédito: "Automático",
        "Plazo máximo": "Hasta 96 meses",
        "Tasa ordinaria": "1% mensual (12% anual) más IVA",
        "Tasa moratoria": "2% mensual (24% anual) mas IVA",
        Garantía: "100% de garantía liquida y quirografaria",
        "Tiempo de respuesta": "Inmediata",
        Condiciones: "Presentar reporte de Buró, según sea el caso."
    },
    {
        Crédito: "Automático 30- 50",
        "Plazo máximo": "Hasta 96 meses",
        "Tasa ordinaria": "1.3% mensual\n(15.60% anual) mas IVA",
        "Tasa moratoria": "2% mensual (24% anual) mas IVA",
        Garantía: "100% garantía liquida, 1 a 2 avales según el monto a solicitar",
        "Tiempo de respuesta": "Inmediata",
        Condiciones: "Presentar reporte de Buró.\nEn caso de presentar avales no socios se realizará la visita domiciliaria antes de su entrega."
    },
    {
        Crédito: "Ordinario socio cumplido",
        "Plazo máximo": "Hasta 96 meses",
        "Tasa ordinaria": "1% mensual (12% anual) más IVA",
        "Tasa moratoria": "2% mensual (24% anual) mas IVA",
        Garantía: "100% de garantía liquida y quirografaria",
        "Tiempo de respuesta": "Inmediata",
        Condiciones: "Presentar reporte de Buró, según sea el caso."
    },
    {
        Crédito: "Ordinario socio cumplido 30-50",
        "Plazo máximo": "Hasta 96 meses",
        "Tasa ordinaria": "1.3% mensual\n(15.60% anual) mas IVA",
        "Tasa moratoria": "2% mensual (24% anual) mas IVA",
        Garantía: "100% garantía liquida, 1 a 2 avales según el monto a solicitar",
        "Tiempo de respuesta": "Inmediata",
        Condiciones: "Presentar reporte de Buró. En caso de presentar avales no socios se realizará la visita domiciliaria y se pasara a revisión al Comite de Crédito."
    },
    {
        Crédito: "Emergencia",
        "Plazo máximo": "Hasta 6 meses",
        "Tasa ordinaria": "1% mensual (12% anual) más IVA",
        "Tasa moratoria": "2% mensual (24% anual) mas IVA",
        Garantía: "Si no garantiza con el monto de sus haberes, lo garantizará con un aval y/o su buen historial crediticio.",
        "Tiempo de respuesta": "inmediata",
        Condiciones: "Presentar reporte de Buró. En caso de presentar avales no socios se realizará la visita domiciliaria."
    },
    {
        Crédito: "Ordinario doble",
        "Plazo máximo": "Hasta 96 meses",
        "Tasa ordinaria": "1.5% mensual\n(18% anual)",
        "Tasa moratoria": "2% mensual (24% anual) mas IVA",
        Garantía: "100% de garantía liquida 1 a 2 avales y/o garantía prendaria o hipotecaria,  según monto a solicitar",
        "Tiempo de respuesta": "Si el capital en riesgo es hasta por $ 20,000.00 será de entrega inmediata, 1 aval y pasa a revisión por el comité de crédito.\nSi el capital en riesgo es mayor a $ 20,000.00 y hasta $70,000.00 2 avales. Si el capital en riesgo es mayor de $70,000.00 a $ 150,000.00, 2 avales y garantía prendaria. Si el capital en riesgo es mayor de $ 150,000.00 2 avales y garantía hipotecaria protocolizada.",
        Condiciones: "Si el capital en riesgo es hasta por $ 20,000.00 será de entrega inmediata, 1 aval y pasa a revisión por el comité de crédito.\nSi el capital en riesgo es mayor a $ 20,000.00 y hasta $70,000.00 2 avales. Si el capital en riesgo es mayor de $70,000.00 a $ 150,000.00, 2 avales y garantía prendaria. Si el capital en riesgo es mayor de $ 150,000.00 2 avales y garantía hipotecaria protocolizada."
    },
    {
        Crédito: "Ordinario triple",
        "Plazo máximo": "Hasta 96 meses",
        "Tasa ordinaria": "1.7% mensual\n(20.40% anual)",
        "Tasa moratoria": "2% mensual (24% anual) mas IVA",
        Garantía: "100% de garantía liquida 1 a 2 avales y/o garantía prendaria o hipotecaria, según monto a solicitar",
        "Tiempo de respuesta": "inmediata y entre 8 y 10 días según el monto del crédito",
        Condiciones: "Si el capital en riesgo es hasta por $ 20,000.00 será de entrega inmediata, un aval y pasa a revisión por el comité de crédito.\nSi el capital en riesgo es mayor a $ 20,000.00 y hasta $70,000.00 2 avales. si el capital en riesgo es mayor de $70,000.00 hasta $ 150,000.00 2 avales y garantía prendaria. Si el capital en riesgo es mayor de $ 150,000.00 2 avales y garantía hipotecaria protocolizada."
    },
    {
        Crédito: "Comercial",
        "Plazo máximo": "Hasta 96 meses",
        "Tasa ordinaria": "1% mensual (12% anual)",
        "Tasa moratoria": "2% mensual (24% anual)",
        Garantía: "20% garantía liquida,2 avales y/o garantía prendaria e hipotecaria, según el monto a solicitar",
        "Tiempo de respuesta": "Entre 8 y 10 días",
        Condiciones: "Presentar reporte de Buró, según sea el caso. No se otorgará reestructura o renovación."
    },
    {
        Crédito: "Promoción",
        "Plazo máximo": "Hasta 96 meses",
        "Tasa ordinaria": "1.1% mensual\n(13.20% anual) mas IVA",
        "Tasa moratoria": "2% mensual (24% anual) mas IVA",
        Garantía: "10% garantía liquida, 2 avales y/o garantía prendaria e hipotecaria, según monto a solicitar",
        "Tiempo de respuesta": "Inmediato y entre 8 a 10 días",
        Condiciones: "Presentar reporte de Buró.\nHasta un monto por 20,000.00, entrega inmediata 1 aval y pasa a revisión por el comité de crédito,  si es mayor  de$ 20,000 y hasta $ 70,000.00 2\navales, mayores de $ 70,000.00 a $ 150,000.00 2 avales y garantía prendaria, mayores a\n$150,000.00 2 avales y garantía hipotecaria protocolizada.\nNo se otorgará reestructura."
    },
    {
        Crédito: "Calentador solar",
        "Plazo máximo": "Hasta 18 meses",
        "Tasa ordinaria": "No aplica",
        "Tasa moratoria": "2% mensual (24% anual)",
        Garantía: "10% garantía liquida y 1aval",
        "Tiempo de respuesta": "Entre 8 y 10 días",
        Condiciones: "Presentar reporte de Buró y revisado por el Comite de Crédito."
    },
    {
        Crédito: "Agricultura",
        "Plazo máximo": "Hasta 12 meses",
        "Tasa ordinaria": "1.9% mensual\n(22.80% anual)",
        "Tasa moratoria": "2% mensual (24% anual)",
        Garantía: "10% garantía liquida y 2 avales, garantía prendaria o hipotecaria protocolizada",
        "Tiempo de respuesta": "Entre 8 y 10 días",
        Condiciones: "Presentar reporte de Buró y declaratoria de la finalidad del crédito. Garantía prendaria mayores de $70,000.00 hasta $90,000.00 o hipotecaria protocolizada mayores de $90,000.00"
    },
    {
        Crédito: "Ocasional",
        "Plazo máximo": "Hasta 96 meses",
        "Tasa ordinaria": "2.5% mensual\n(30% anual) más IVA",
        "Tasa moratoria": "2% mensual (24% anual) mas IVA",
        Garantía: "10% garantía liquida y 1 a 2 avales, garantía prendaria o hipotecaria, según el monto a solicitar.",
        "Tiempo de respuesta": "inmediata y entre 8 y 10 días según el monto del crédito",
        Condiciones: "Presentar reporte de Buró.\nHasta un monto por 20,000.00 entrega inmediata, 1 aval y pasa a revisión por el comité de crédito. Mayores de $ 20,000 hasta $ 70,000.00, 2 avales. Mayores de $ 70,000.00 a $ 150,000.00 2 avales y garantía prendaria.\nMayores a $150,000.00 2 avales y garantía hipotecaria protocolizada.\nNo se otorgará reestructura."
    },
    {
        Crédito: "Nómina",
        "Plazo máximo": "Hasta 36 meses",
        "Tasa ordinaria": "1% mensual (12% anual) mas IVA",
        "Tasa moratoria": "2% mensual (24% anual) mas IVA",
        Garantía: "10% garantía liquida.",
        "Tiempo de respuesta": "inmediata",
        Condiciones: "Presentar reporte de Buró y revisión por el Comite de Crédito."
    }
]
export default credits