import {StyleSheet, SafeAreaView, Text, ImageBackground, View, ScrollView, TouchableOpacity} from 'react-native';

import background from '@/assets/images/background.jpg';
import trips from "@/constants/trips";
import {FontAwesome5} from "@expo/vector-icons";
import {router} from "expo-router";

const HomeScreen = () => {
    return (
        <ImageBackground source={background} style={styles.background}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView style={styles.scrollView}>
                    {trips.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.card}>
                            <View style={styles.cardRow}>
                                {/* Departure Time */}
                                <View style={styles.departureTime}>
                                    <Text style={styles.textSmallGray}>{item.heure_depart}</Text>
                                </View>

                                {/* Icons */}
                                <View style={styles.iconsContainer}>
                                    <FontAwesome5 name="circle" size={12} color="#000" />
                                    <View style={styles.verticalLine} />
                                    <FontAwesome5 name="square" size={12} color="#000" />
                                </View>

                                {/* Locations */}
                                <View style={styles.locationsContainer}>
                                    <Text style={styles.textLargeBold}>{item.depart}</Text>
                                    <Text style={styles.textSmallGray}>{item.arrivée}</Text>
                                </View>

                                {/* Price */}
                                <View style={styles.priceContainer}>
                                    <Text style={styles.textLargeBold}>{item.prix} FCFA</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            router.replace("/(passager)/reservation");
                        }}
                        style={styles.searchButton}
                    >
                        <Text style={styles.searchButtonText}>
                            Rechercher d'autres trajets
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    safeArea: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: 24,
        borderRadius: 16,
        width: "92%",
        maxWidth: 400,
        height: "66%",
    },
    scrollView: {
        flex: 1,
        width: "100%",
        borderRadius: 16,
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        padding: 16,
        marginBottom: 16,
    },
    cardRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    departureTime: {
        width: "16%",
        alignItems: "center",
    },
    iconsContainer: {
        width: "16%",
        alignItems: "center",
    },
    verticalLine: {
        height: 24,
        width: 2,
        backgroundColor: "#d1d5db",
        marginVertical: 4,
    },
    locationsContainer: {
        width: "50%",
    },
    priceContainer: {
        width: "16%",
        alignItems: "center",
    },
    textSmallGray: {
        fontSize: 12,
        color: "#6b7280",
    },
    textLargeBold: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1f2937",
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
    },
    searchButton: {
        backgroundColor: "#2563eb",
        paddingVertical: 16,
        borderRadius: 8,
        width: "100%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginTop: 16,
        activeOpacity: 0.7,
    },
    searchButtonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
    },
});

export default HomeScreen;