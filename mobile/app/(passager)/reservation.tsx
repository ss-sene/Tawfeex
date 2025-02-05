import {
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {useState} from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const Reservation = () => {

    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        nom: "",
        prenom: "",
        telephone: "",
        depart: "",
        arrivee: "",
        date_depart: "",
        nbr_place: ""
    });

    const handleInputChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                { step === 1 && (
                    <>
                        <Text style={styles.title}>Comment vous appelez-vous ?</Text>

                        <View style={styles.inGroup}>
                            <Text style={styles.label}>Nom</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => handleInputChange("nom", value)}
                            />
                        </View>

                        <View style={styles.inGroup}>
                            <Text style={styles.label}>Prénom</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => handleInputChange("prenom", value)}
                            />
                        </View>

                        <View style={styles.inGroup}>
                            <Text style={styles.label}>Numéro de téléphone</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => handleInputChange("telephone", value)}
                            />
                        </View>
                    </>
                )}

                {step === 2 && (
                    <>
                        <Text style={styles.title}>Vous partez d'où ?</Text>

                        <View style={styles.inGroup}>
                            <Text style={styles.label}>Lieu de départ</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => handleInputChange("depart", value)}
                            />
                        </View>

                        <View style={styles.inGroup}>
                            <Text style={styles.label}>Date de départ</Text>
                            <DateTimePicker
                                value={form.date_depart}
                                mode="date"
                                display="default"
                                onChange={(event, selectedDate) =>
                                    handleInputChange("date", selectedDate || form.date_depart)
                                }
                            />
                        </View>
                    </>
                )}

                {step === 3 && (
                    <>
                        <Text style={styles.title}>Vous allez où ?</Text>

                        <View style={styles.inGroup}>
                            <Text style={styles.label}>Lieu d'arrivée</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => handleInputChange("arrivee", value)}
                            />
                        </View>
                    </>
                )}

                {step === 4 && (
                    <>
                        <Text style={styles.title}>Combien de passagers</Text>

                        <View style={styles.inGroup}>
                            <Text style={styles.label}>Nombre de passager</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => handleInputChange("nbr_place", value)}
                            />
                        </View>
                    </>
                )}
            </ScrollView>

            {/* Navigation Buttons */}
            <KeyboardAvoidingView
                style={styles.buttonContainer}
                behavior={"padding"}
                keyboardVerticalOffset={10}
            >
                {step > 1 && (
                    <TouchableOpacity style={styles.button} onPress={prevStep}>
                        <Text style={styles.buttonText}>Précédent</Text>
                    </TouchableOpacity>
                )}

                {step < 4 ? (
                    <TouchableOpacity style={styles.button} onPress={nextStep}>
                        <Text style={styles.buttonText}>Suivant</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={[styles.button, styles.validateButton]}
                        onPress={() => console.log("Trajet publié :", form)}
                    >
                        <Text style={styles.buttonText}>Valider</Text>
                    </TouchableOpacity>
                )}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Reservation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        padding: 20
    },
    scrollView: {
        flex: 1,
        margin: 20
    },
    inGroup: {
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        backgroundColor: "#f9f9f9",
        borderWidth: 1,
        width: "90%",
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        color: "#333",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    button: {
        backgroundColor: "#FFA500",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        flex: 1,
        marginHorizontal: 5,
    },
    validateButton: {
        backgroundColor: "#008000",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
})