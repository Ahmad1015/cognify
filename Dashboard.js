// Dashboard.js
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Pressable,
    Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Linking, Alert } from 'react-native';
/* other imports... */

const PHONE_NUMBER = '+1234567890'; // put the number you want to dial (use international format if possible)

async function handleCall(number = PHONE_NUMBER) {
  try {
    const url = `tel:${number}`;
    const supported = await Linking.canOpenURL(url);
    if (!supported) {
      Alert.alert('Error', 'Phone dialer is not available on this device.');
      return;
    }
    await Linking.openURL(url);
  } catch (err) {
    console.error('Failed to open dialer', err);
    Alert.alert('Error', 'Unable to open dialer.');
  }
}

export default function Dashboard({ user, onLogout }) {
    return (
        <SafeAreaView style={styles.safe}>
            {/* blue background header */}
            <LinearGradient colors={['#eaf6ff', '#dff6fb']} style={styles.headerBlue}>
                {/* white rectangle header box placed on top of blue */}
                <View style={styles.headerCard}>
                    <View style={styles.headerLeft}>
                        <View style={styles.avatarCircle}>
                            <Text style={styles.avatarText}>ES</Text>
                        </View>
                        <View style={{ marginLeft: 19 }}>
                            <Text style={styles.headerTitle}>Dashboard</Text>
                            <Text style={styles.headerSub}>Managing Your Device</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.settingsBtn} onPress={() => { }}>
                        <Text style={styles.settingsIcon}>⚙️</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                {/* small spacer so headerCard visually sits above content */}
                <View style={{ height: 18 }} />

                {/* Device card - shorter, connected inline */}
<Pressable
  style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
  onPress={() => {}}
>
  <View style={styles.deviceRow}>
    <View style={styles.deviceLeftRow}>
      <View style={styles.deviceIconWrap}>
        {/* vector icon instead of emoji */}
        <MaterialCommunityIcons name="devices" size={22} color="#2a6fb0" />
      </View>

      <View style={{ marginLeft: 19, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.deviceLabel}>Device</Text>
        <Text style={styles.dot}> • </Text>
        <Text style={styles.connectedText}>Connected</Text>
      </View>
    </View>
  </View>
</Pressable>

                {/* Call button */}
                {/* Call button */}
                <View style={{ height: 12 }} />
                <Pressable
                    style={({ pressed }) => [styles.callWrapper, pressed && styles.callPressed]}
                    onPress={() => handleCall('+923001234567')} // example: Pakistan +92...
                >
                    <LinearGradient
                        colors={['#2f9bff', '#00c2a8']}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={styles.callBtn}
                    >
                        <Text style={styles.callText}>Call Khadijah</Text>
                        <View style={styles.callIconWrap}>
                            <Text style={styles.callIcon}>📞</Text>
                        </View>
                    </LinearGradient>
                </Pressable>


                {/* Quick Actions large card with title inside */}
                <View style={{ height: 18 }} />
                <Pressable style={({ pressed }) => [styles.card, pressed && styles.cardPressed]} onPress={() => { }}>
                    <Text style={styles.quickTitle}>Quick Actions</Text>

                    <View style={{ height: 12 }} />

                    <View style={styles.quickActionsRow}>
                        {/* Ask for Help */}
                        <TouchableOpacity
                            style={[styles.largeAction, { marginRight: 12 }]}
                            activeOpacity={0.9}
                            onPress={() => { }}
                        >
                            <LinearGradient
                                colors={['#42a7ff', '#2ce0c0']}
                                start={[0, 0]}
                                end={[1, 0]}
                                style={[styles.largeActionInner, styles.largeActionInnerLeft]}
                            >
                                <View style={styles.iconCircle}>
                                    <Ionicons name="mic-outline" size={18} color="#FFFFFF" />
                                </View>

                                <Text style={styles.largeActionText}>Ask for Help</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        {/* Location */}
                        <TouchableOpacity
                            style={styles.largeAction}
                            activeOpacity={0.9}
                            onPress={() => { }}
                        >
                            <LinearGradient
                                colors={['#6bd0ff', '#29d0b9']}
                                start={[0, 0]}
                                end={[1, 0]}
                                style={[styles.largeActionInner, styles.largeActionInnerRight]}
                            >
                                <View style={styles.iconCircle}>
                                    <Ionicons name="location-outline" size={18} color="#FFFFFF" />
                                </View>

                                <Text style={styles.largeActionText}>Location</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Pressable>


                {/* Upcoming Reminders */}
                <View style={{ height: 18 }} />
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>Upcoming Reminders</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.sectionPlus}>＋</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <ReminderRow
                        icon="💊"
                        title="Take Medication"
                        time="9:00 AM"
                        status="Pending"
                        onPress={() => { }}
                    />
                    <View style={{ height: 12 }} />
                    <ReminderRow
                        icon="🩺"
                        title="Doctor's Appointment"
                        time="9:00 AM"
                        status="Pending"
                        onPress={() => { }}
                    />
                </View>

                {/* Recent Activity */}
                <View style={{ height: 18 }} />
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>Recent Activity</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <ActivityRow title="Medication reminder completed" timeAgo="2 minutes ago" onPress={() => { }} />
                    <View style={{ height: 12 }} />
                    <ActivityRow title="Recognized: John (Son)" timeAgo="15 minutes ago" onPress={() => { }} />
                    <View style={{ height: 12 }} />
                    <ActivityRow title="Low battery warning" timeAgo="1 hour ago" onPress={() => { }} />
                </View>

                {/* Sign out */}
                <View style={{ height: 22 }} />
                <TouchableOpacity style={styles.signoutBtn} onPress={onLogout}>
                    <Text style={styles.signoutText}>Sign Out</Text>
                </TouchableOpacity>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

/* small components */

function ReminderRow({ icon, title, time, status, onPress }) {
    return (
        <Pressable style={({ pressed }) => [styles.reminderRow, pressed && styles.rowPressed]} onPress={onPress}>
            <View style={styles.reminderLeft}>
                <View style={styles.reminderIcon}><Text>{icon}</Text></View>
                <View style={{ marginLeft: 12 }}>
                    <Text style={styles.reminderTitle}>{title}</Text>
                    <Text style={styles.reminderTime}>{time}</Text>
                </View>
            </View>

            <View style={styles.reminderRight}>
                <View style={styles.pendingPill}>
                    <Text style={styles.pendingText}>{status}</Text>
                </View>
            </View>
        </Pressable>
    );
}

function ActivityRow({ title, timeAgo, onPress }) {
    return (
        <Pressable style={({ pressed }) => [styles.activityRow, pressed && styles.rowPressed]} onPress={onPress}>
            <View style={styles.activityLeft}>
                <View style={styles.activityDot}><Text>●</Text></View>
                <View style={{ marginLeft: 12 }}>
                    <Text style={styles.activityTitle}>{title}</Text>
                    <Text style={styles.activityTime}>{timeAgo}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.activityChevron}>›</Text>
            </View>
        </Pressable>
    );
}

/* styles */

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#eaf6ff',
    },
    viewAll:{
        marginLeft:10
    },

    /* blue header band */
    headerBlue: {
        paddingHorizontal: 8,
        paddingTop: 6,
        paddingBottom: 0,
        marginLeft: -10,
        marginRight: -10
    },

    /* white rectangle inside header band */
    headerCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 12, shadowOffset: { width: 0, height: 8 } },
            android: { elevation: 2 },
        }),
    },
    headerLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },

    avatarCircle: {
        width: 48,
        height: 48,
        borderRadius: 28,
        backgroundColor: '#e7f1ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: { color: '#2a6fb0', fontWeight: '700' },

    headerTitle: { fontSize: 18, color: '#213245', fontWeight: '700' },
    headerSub: { fontSize: 12, color: '#7b8b98', marginTop: 2 },

    settingsBtn: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#eef5fb',
        marginLeft: 8,
    },
    settingsIcon: { fontSize: 16 },

    /* main scroll content */
    container: {
        paddingHorizontal: 18,
        paddingTop: 10,
        paddingBottom: 36,
    },

    /* white cards used throughout */
    card: {
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 14,
        marginBottom: 8,
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 12, shadowOffset: { width: 0, height: 8 } },
            android: { elevation: 3 },
        }),
    },
    cardPressed: {
        transform: [{ translateY: -6 }],
        ...Platform.select({
            ios: { shadowOpacity: 0.10, shadowRadius: 18 },
            android: { elevation: 6 },
        }),
    },

    /* Device */
    deviceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deviceLeftRow: { flexDirection: 'row', alignItems: 'center', flex: 1 },
    deviceIconWrap: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#f0fbff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deviceIcon: { fontSize: 18 },
    deviceLabel: { fontSize: 15, fontWeight: '700', color: '#213245' },
    dot: { fontSize: 14, color: '#6b7a89', marginHorizontal: 6 },
    connectedText: { color: '#0cb97d', fontWeight: '700' },

    /* call button */
    callWrapper: {
        borderRadius: 12,
        overflow: 'hidden',
    },
    callBtn: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    callText: { color: '#fff', fontWeight: '700', fontSize: 15 },
    callIconWrap: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.14)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    callIcon: { color: '#fff' },
    callPressed: { transform: [{ translateY: -4 }] },

    /* quick actions: title inside the card */
    quickTitle: { fontSize: 16, fontWeight: '700', color: '#213245' },
    quickActionsRow: { flexDirection: 'row', marginTop: 6 },
    /* each large action fills half width and is taller */
    largeAction: { flex: 1, marginRight: 10, borderRadius: 12, overflow: 'hidden' },
    largeActionInner: {
        paddingVertical: 18,
        paddingHorizontal: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    largeActionInnerAlt: {
        paddingVertical: 18,
        paddingHorizontal: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    largeActionText: { color: '#fff', fontWeight: '700', fontSize: 16 },

    iconCircle: {
        width: 38,
        height: 38,
        marginLeft: -8,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.16)', // soft translucent white like screenshot
        marginRight: 4,
    },

    largeActionInnerLeft: {
        // small extra shadow tint on left gradient if you want
    },
    largeActionInnerRight: {
        // placeholder if you want different tweaks for right button
    },

    quickTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#213245',
    },

    quickActionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        // keep each action same height by not wrapping, they share space
    },

    largeAction: {
        flex: 1,
        borderRadius: 12,
        overflow: 'hidden',
    },

    largeActionInner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,         // tall pill
        paddingHorizontal: 14,
        marginRight: 1,
        borderRadius: 12,
        justifyContent: 'flex-start', // icon + text on the left
        // shadow on iOS / elevation on Android
        ...Platform.select({
            ios: {
                shadowColor: '#1E90FF',
                shadowOpacity: 0.12,
                shadowRadius: 12,
                shadowOffset: { width: 0, height: 8 },
            },
            android: {
                elevation: 6,
            },
        }),
    },

    /* reminders */
    sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
    sectionTitle: { fontSize: 16, fontWeight: '700', color: '#213245' },
    sectionPlus: { color: '#9fbce3', fontWeight: '700', marginLeft: 10 },

    reminderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderRadius: 10,
    },
    reminderLeft: { flexDirection: 'row', alignItems: 'center' },
    reminderIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#f6fbff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reminderTitle: { fontSize: 15, fontWeight: '700', color: '#213245' },
    reminderTime: { fontSize: 12, color: '#7b8b98', marginTop: 4 },

    reminderRight: { alignItems: 'flex-end' },
    pendingPill: {
        backgroundColor: '#fff7dc',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 18,
    },
    pendingText: { fontSize: 12, color: '#9a7a2b', fontWeight: '700' },

    /* activity */
    activityRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    activityLeft: { flexDirection: 'row', alignItems: 'center' },
    activityDot: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#f2f8ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityTitle: { fontWeight: '700', color: '#213245' },
    activityTime: { fontSize: 12, color: '#8a9aa8', marginTop: 4 },
    activityChevron: { color: '#c6d9ef', fontSize: 20 },

    rowPressed: {
        transform: [{ translateY: -4 }],
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 16, shadowOffset: { width: 0, height: 10 } },
            android: { elevation: 6 },
        }),
    },

    /* signout */
    signoutBtn: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eef5fb',
    },
    signoutText: { color: '#1E90FF', fontWeight: '700' },
});
